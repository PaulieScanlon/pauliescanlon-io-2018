import * as React from "react";

import { IPostData } from "../../types/data-types";

import { PortfolioWrapper } from "./styles";
import { SectionHeader } from "../SectionHeader";
import { ArrayGrid } from "../ArrayGrid";
import { Card } from "../Card";

interface IProps {
  posts: IPostData[];
}

export const Portfolio = ({ posts }: IProps) => {
  return (
    <PortfolioWrapper>
      <SectionHeader leading="portfolio-items" trailing="commercial()" />
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
