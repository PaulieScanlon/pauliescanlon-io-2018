import * as React from "react";

import { PostsWrapper } from "./styles";

import { IPostData } from "../../types/data-types";
import { FlexGrid } from "../../atoms/flex-grid";

import { Card } from "../../molecules/card";

export const Posts = (props: IPostData[]) => {
  const posts = Object.values(props).map((post: IPostData) => {
    return post;
  });

  return (
    <PostsWrapper>
      <FlexGrid
        dataArray={posts}
        cols={{
          xs: 2,
          sm: 3,
          md: 4
        }}
        renderContent={props => <Card {...props} />}
      />
    </PostsWrapper>
  );
};
