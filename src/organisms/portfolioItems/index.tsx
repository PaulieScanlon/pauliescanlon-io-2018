import * as React from "react";

import { PostsWrapper } from "./styles";

import { IPostData } from "../../types/data-types";
import { FlexGrid } from "../../atoms/flex-grid";

import { Card } from "../../molecules/card";

interface IProps {
  posts: IPostData[];
}

export const PortfolioItems: React.SFC<IProps> = ({ posts }) => {
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
