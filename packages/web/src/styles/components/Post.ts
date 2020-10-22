import styled from 'styled-components';

import Skeleton from './Skeleton';

export interface IContainerProps {
  backgroundImage: string;
}

export const Container = styled.a<IContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 25rem;
  width: 20rem;
  max-width: 90%;

  text-align: left;
  margin: 1rem;

  background: ${(props) =>
    `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) ), url(${props.backgroundImage}) center center no-repeat`};
  padding: 2rem;
  background-size: cover;

  border-radius: 10px;
  transition: all 0.2s ease-in;
  cursor: pointer;

  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  box-shadow: -6px 10px 12px -4px rgba(0, 0, 0, 0.39);

  h2 {
    font-size: 3rem;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export const PostSkeleton = styled(Skeleton)`
  height: 25rem;
  width: 20rem;
  max-width: 90%;

  flex-direction: column;
  align-items: center;
  text-align: left;

  margin: 1rem;
  border-radius: 10px;
  padding: 2rem;
`;
