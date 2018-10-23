import { keyframes } from 'styled-components';

const slideIn = distance => keyframes`
  0% { transform: translateX(${distance}); opacity: 0; }
  100% { transform: translateX(0); opacity: 1;}
`;

export default slideIn;
