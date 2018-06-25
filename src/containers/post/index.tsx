import * as React from 'react';

import { PostWrapper } from './styles';

import { IPostData } from '../../types/data-types';
import { FlexGrid } from '../../components/flex-grid';

import { Card } from '../../components/card';

export const Post = (props: IPostData[]) => {
  const posts = Object.values(props).map((post: IPostData) => {
    return post;
  });

  return (
    <PostWrapper>
      <FlexGrid
        dataArray={posts}
        cols={{
          xs: 2,
          sm: 3,
          md: 4
        }}
        renderContent={props => <Card {...props} />}
      />
    </PostWrapper>
  );
};
