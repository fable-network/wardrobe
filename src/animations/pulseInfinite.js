import { keyframes } from 'styled-components';

/** @component */
const pulseInfinite = keyframes`
  40% { transform: scale(1); }
  60% { transform: scale(1.2); }
  80% { transform: scale(1); }
`;

export default pulseInfinite;
