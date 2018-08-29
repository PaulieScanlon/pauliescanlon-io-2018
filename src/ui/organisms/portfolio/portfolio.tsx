import * as React from "react";

import { IPostData } from "../../../types/data-types";

import { PortfolioWrapper } from "./styles";
import SectionHeader from "../../atoms/section-header";
import FlexGrid from "../../atoms/flex-grid";
import Card from "../../molecules/card";

interface IProps {
  posts: IPostData[];
}

export const Portfolio = ({ posts }: IProps) => {
  return (
    <PortfolioWrapper>
      <SectionHeader leading="portfolio-items" trailing="commercial()" />
      <FlexGrid
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
