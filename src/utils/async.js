export const delayPromise = wait => data =>
  new Promise(resolve => setTimeout(() => resolve(data), wait));

export const requestWithRetry = async (request, numRetries = 3) => {
  let lastError;
  for (let i = 0; i < numRetries; i++) {
    try {
      return await request(); // eslint-disable-line
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
};

const serializeRequests = async (requests, wait = 0) => {
  let res;
  try {
    for (let i = 0; i < requests.length; i++) {
      res = delayPromise(wait)(await requestWithRetry(requests[i])); // eslint-disable-line
    }
  } catch (err) {
    throw err;
  }

  return res;
};

export class RequestsQueue {
  constructor({ withIdentifier }) {
    this.list = [];
    this.progress = false;
    this.withIdentifier = withIdentifier;
  }

  removeById(id) {
    const list = this.list.filter(item => item.id !== id && !!item.idle);
    this.list = list;
  }

  add(request, id) {
    const item = { request, idle: true };
    if (this.withIdentifier) {
      if (!id) throw new Error('The request needs an identifier.');
      this.removeById(id);
      item.id = id;
    }
    this.list.push(item);

    if (!this.progress) this.execute();
  }

  async execute() {
    this.progress = true;
    while (this.list.length > 0) {
      const item = this.list.shift();
      item.idle = false;
      /* eslint-disable-next-line */
      await item.request().catch(() => {
        this.progress = false;
      });
    }
    this.progress = false;
  }

  isEmptyForId(id) {
    return this.list.filter(item => item.id === id).length === 0;
  }
}

export default serializeRequests;
