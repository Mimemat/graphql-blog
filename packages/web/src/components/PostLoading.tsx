import React from 'react';

import {
  TitleSkeleton,
  SkeletonTextContainer,
  SkeletonContent,
} from '../styles/components/PostLoading';
import Skeleton from '../styles/components/Skeleton';

const PostLoading: React.FC = () => {
  return (
    <>
      <TitleSkeleton>
        <Skeleton className="skeleton-image" />
        <SkeletonTextContainer>
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-title" />
          <Skeleton className="skeleton-title" />
        </SkeletonTextContainer>
      </TitleSkeleton>
      <SkeletonContent>
        {Array.from(Array(9)).map((_, index) => (
          <Skeleton key={index} className="skeleton-text" />
        ))}
      </SkeletonContent>
    </>
  );
};

export default PostLoading;
