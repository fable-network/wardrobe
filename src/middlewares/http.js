/**
 * A middleware to make HTTP requests in a standardised manner.
 *
 * For any action which has an `api` prop it:
 * 1. Makes a network request.
 * 2. Waits for request to finish or to fail.
 * 3. Fires a success or failure actions.
 *
 * Action types are generated using `success` and `failed` functions.
 *
 * Example:
 *
 * ```
 * const uploadDocument = (file, config) => ({
 *   type: types.DOC_UPLOAD,
 *   api: (api) => api.uploadDocument(file, config),
 *   onError: myErrorActionCreator, // dispatched and given an error object as an argument
 *   onSuccess: mySuccessActionCreator, // dispatched and given a response object as an argument
 *   payload: { file, config },
 * });
 * ```
 *
 * Then success action will look like this:
 *
 * ```
 * {
 *   type: success(types.DOC_UPLOAD), // 'DOC_UPLOAD_SUCCESS'
 *   payload: ..., // response.data
 *   response: ..., // an actual response to have access to HTTP status etc.
 *   initialPayload: { file, config }, // the original payload
 * }
 * ```
 *
 * And a failure action:
 *
 * ```
 * {
 *   type: failed(types.DOC_UPLOAD), // 'DOC_UPLOAD_FAILED'
 *   error: ..., // error data
 *   response: ..., // an actual response to have access to HTTP status etc.
 *   initialPayload: { file, config }, // the original payload
 * }
 * ```
 *
 * TODO: automatic request deduplication,
 * TODO: request cancellation
 */

import { RequestsQueue } from '../utils/async';

const queue = new RequestsQueue({ withIdentifier: true });

const PICK_RESPONSE_FIELDS = ['status', 'statusText', 'headers'];

export const success = type => `${type}_SUCCESS`;

export const failed = type => `${type}_FAILED`;

export default function httpMiddleware(api) {
  return ({ dispatch }) => next => action => {
    const {
      type,
      api: makeApiRequest,
      onSuccess,
      onError,
      domain,
      payload = {},
      apiConfig = {},
    } = action;
    const { useQueue = false, queueId } = apiConfig;

    if (!makeApiRequest) {
      return next(action);
    }

    if (typeof makeApiRequest !== 'function') {
      throw new Error('[HTTP Middleware]: Expected "api" to be a function.');
    }

    const requestedAt = Date.now();
    next({ ...action, requestedAt });

    const apiRequest = () =>
      makeApiRequest(api)
        .then(response => {
          // if a queue for the action is still in progress
          // do not dispatch success until queue is fully processed
          if (!useQueue || queue.isEmptyForId(queueId)) {
            const { entities, ...data } = response.data;
            const successAction = {
              type: success(type),
              payload: data,
              response: pick(response, PICK_RESPONSE_FIELDS),
              initialPayload: payload,
              entities,
              requestedAt,
              receivedAt: Date.now(),
            };
            if (domain) successAction.domain = domain;

            dispatch(successAction);

            if (typeof onSuccess === 'function') {
              const onSuccessResult = onSuccess(response);
              if (onSuccessResult) dispatch(onSuccessResult);
            }
          }
        })
        .catch(error => api.genericErrorHandler(error))
        .catch(error => {
          const errorAction = {
            type: failed(type),
            error: { ...error },
            initialPayload: payload,
            requestedAt,
          };
          if (domain) errorAction.domain = domain;

          dispatch(errorAction);

          if (typeof onError === 'function') {
            const onErrorResult = onError(error);
            if (onErrorResult) dispatch(onErrorResult);
          }
        });

    if (useQueue) {
      return queue.add(apiRequest, queueId);
    }

    return apiRequest();
  };
}

function pick(object, fields) {
  return fields.reduce((acc, field) => {
    if (Object.prototype.hasOwnProperty.call(object, field)) {
      acc[field] = object[field];
    }
    return acc;
  }, {});
}
