import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #525252 0%,
    #616161 50%,
    #525252 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  border-radius: 8px;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
