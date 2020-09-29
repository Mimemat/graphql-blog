import styled from 'styled-components';

interface ITitleProps {
  backgroundImage: string;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  overflow-y: auto;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
`;

export const Title = styled.div<ITitleProps>`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(${props.backgroundImage}) center center no-repeat`};

  align-items: center;
  padding: 2rem;
  background-size: cover;

  margin-bottom: 2rem;

  img {
    width: 40rem;
    height: 25rem;
  }

  h1 {
    font-size: 3rem;
  }

  @media (min-width: 700px) {
    background: ${(props) => props.theme.colors.background};
    flex-direction: row;
    justify-content: space-around;

    h1 {
      font-size: 5rem;
      max-width: 35rem;
    }
  }
`;
