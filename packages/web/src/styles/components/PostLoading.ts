import styled from 'styled-components';

import Skeleton from './Skeleton';

export const TitleSkeleton = styled(Skeleton)`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 2rem;
  background-size: cover;

  margin-bottom: 2rem;

  .skeleton-image {
    width: 40rem;
    height: 25rem;
    display: none;
  }

  .skeleton-title {
    width: 60%;
    height: 10%;
  }

  height: 15rem;
  width: 95%;

  @media (min-width: 700px) {
    background: ${(props) => props.theme.colors.background};
    flex-direction: row;
    justify-content: space-around;

    height: initial;
    width: initial;

    .skeleton-image {
      display: initial;
    }
  }
`;

export const SkeletonTextContainer = styled.div`
  display: none;
  grid-column: 1fr;
  grid-row: 1fr 1fr 1fr;

  width: 40%;
  height: 100%;

  .skeleton-title {
    width: 90%;
    height: 4rem;
  }

  .skeleton-title + .skeleton-title {
    margin-top: 4rem;
  }

  @media (min-width: 1000px) {
    display: grid;
  }
`;

export const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;

  .skeleton-text {
    width: 100%;
    height: 2rem;
  }

  .skeleton-text + .skeleton-text {
    margin-top: 2rem;
  }
`;
