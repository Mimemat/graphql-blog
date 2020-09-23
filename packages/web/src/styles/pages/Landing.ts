import styled from 'styled-components';

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

export const MainTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
`;

export const SubTitle = styled.p`
  font: ${(props) => props.theme.fonts.medium};
  font-size: 1.1rem;
  font-weight: 500;

  margin: 1rem 0.4rem;
  max-width: 15rem;
`;

export const PostsText = styled.p`
  font: ${(props) => props.theme.fonts.medium};
  font-size: 1.6rem;
  font-weight: 500;

  margin: 2rem 0.4rem;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;

    padding: 1rem;
  }
`;
