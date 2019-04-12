import { css } from 'styled-components';

export const sizesMin = {
  tablet: 600,
  desktop: 900,
  wide: 1200,
};

export const sizesMax = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

function createMediaRule({ sizeMin, sizeMax }) {
  const min = Boolean(sizeMin) && `and (min-width: ${sizeMin}px)`;
  const max = Boolean(sizeMax) && `and (max-width: ${sizeMax}px)`;
  return (...args) => css`
  @media screen ${min} ${max} {
    ${css(...args)};
  }
`;
}

function populate(keys, iterator) {
  return keys.reduce((acc, label) => {
    acc[label] = iterator(label);
    return acc;
  }, {});
}

const media = {
  // Up rules
  ...populate(Object.keys(sizesMin).map(label => `${label}_up`), label => {
    const key = label.replace('_up', '');
    return createMediaRule({ sizeMin: sizesMin[key] });
  }),
  // Down rules
  ...populate(Object.keys(sizesMax).map(label => `${label}_down`), label => {
    const key = label.replace('_down', '');
    return createMediaRule({ sizeMax: sizesMax[key] });
  }),
  // Exact rules
  ...populate(['mobile', 'tablet', 'desktop', 'wide'], label =>
    createMediaRule({ sizeMin: sizesMin[label], sizeMax: sizesMax[label] })
  ),
  // Between rule
  tablet_desktop: createMediaRule({ sizeMin: sizesMin.tablet, sizeMax: sizesMax.desktop }),
};

export default media;
