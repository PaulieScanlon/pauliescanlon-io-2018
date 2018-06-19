import * as React from 'react';

import { PostWrapper } from './styles';

import { IPostData } from '../../types/data-types';

import { Card } from '../../components/card';

export const Post = (props: IPostData[]) => {
  const posts = Object.values(props).map((post: IPostData, i: number) => {
    return <Card key={i} {...post} />;
  });

  return <PostWrapper>{posts}</PostWrapper>;
};
