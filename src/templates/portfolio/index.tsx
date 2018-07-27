import * as React from "react";

import { postsHandler } from "../../reducers/data-reducers";

import { Fetcher } from "../../organisms/fetcher";
import { PortfolioItems } from "../../organisms/portfolioItems";

import { ContainedWidth } from "../../styles";

export const Portfolio: React.SFC = () => {
  return (
    <ContainedWidth>
      <Fetcher
        fetchMethod={{
          method: "posts"
        }}
        dataReducer={postsHandler}
        renderComponent={data => <PortfolioItems {...data} />}
      />
    </ContainedWidth>
  );
};
