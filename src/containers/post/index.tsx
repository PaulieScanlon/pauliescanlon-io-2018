import * as React from 'react';

import { PostWrapper } from './styles';

import { IPostData } from '../../types/data-types';
import { FlexGrid } from '../../components/flex-grid';

import { Card } from '../../components/card';

export const Post = (props: IPostData[]) => {
  const posts = Object.values(props).map((post: IPostData, i: number) => {
    return <Card key={i} {...post} />;
  });

  return (
    <PostWrapper>
      <FlexGrid
        data={props}
        cols={{
          xs: 1,
          sm: 2
        }}
        renderContent={() => posts}
      />
    </PostWrapper>
  );
};
