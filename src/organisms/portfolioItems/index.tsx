import * as React from "react";

import { PortfolioItemsWrapper } from "./styles";

import { IPostData } from "../../types/data-types";
import { FlexGrid } from "../../atoms/flex-grid";

import Card from "../../molecules/card";

interface IProps {
  posts: IPostData[];
}

export const PortfolioItems: React.SFC<IProps> = ({ posts }) => {
  return (
    <PortfolioItemsWrapper>
      <FlexGrid
        dataArray={posts}
        cols={{
          xs: 1,
          sm: 2,
          md: 3
        }}
        renderContent={props => <Card {...props} />}
      />
    </PortfolioItemsWrapper>
  );
};
