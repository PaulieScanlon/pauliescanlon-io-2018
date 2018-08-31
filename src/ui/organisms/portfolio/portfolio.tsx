import * as React from "react";

import { IPostData } from "../../../types/data-types";

import { PortfolioWrapper } from "./styles";
import SectionHeader from "../../atoms/section-header";
import PortfolioGrid from "../../atoms/portfolio-grid";
import Card from "../../molecules/card";

interface IProps {
  posts: IPostData[];
}

export const Portfolio = ({ posts }: IProps) => {
  return (
    <PortfolioWrapper>
      <SectionHeader leading="portfolio-items" trailing="commercial()" />
      <PortfolioGrid
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
