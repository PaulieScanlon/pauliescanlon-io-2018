import * as React from "react";

import { IPostData } from "../../types/data-types";

import { PortfolioWrapper } from "./styles";
import { SectionHeader } from "../SectionHeader";
import { ArrayGrid } from "../ArrayGrid";
import { Card } from "../Card";

interface IProps {
  leading: string;
  trailing: string;
  posts: IPostData[];
}

export const Portfolio = (props: IProps) => {
  const { leading, trailing, posts } = props;
  return (
    <PortfolioWrapper>
      <SectionHeader leading={leading} trailing={trailing} />
      <ArrayGrid
        dataArray={posts}
        cols={{
          xs: 1,
          sm: 2,
          md: 3
        }}
        renderContent={data => <Card {...data} />}
      />
    </PortfolioWrapper>
  );
};
