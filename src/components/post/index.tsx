import * as React from 'react';

import { PostWrapper } from './styles';

import { IPostData } from '../../types/api-types';

import { PostCard } from '../ui/post-card';

export const Post = (props: IPostData[]) => {
  const posts = Object.values(props).map((post: IPostData, i: number) => {
    return <PostCard key={i} {...post} />;
  });

  return <PostWrapper>{posts}</PostWrapper>;
};
