import { keyframes } from 'styled-components';

const slideIn = (distanceX, distanceY = 0) => keyframes`
  0% { transform: translate(${distanceX}, ${distanceY}); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1;}
`;

export default slideIn;
