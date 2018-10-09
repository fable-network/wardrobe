import { keyframes } from 'styled-components';

export const fullCircleRotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const slideIn = (distance) => keyframes`
  0% { transform: translateX(${distance}); opacity: 0; }
  100% { transform: translateX(0); opacity: 1;}
`;

export default fullCircleRotate;
