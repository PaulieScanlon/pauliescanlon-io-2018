import * as React from "react";

import { postsHandler } from "../../../reducers/data-reducers";

import Fetcher from "../../organisms/fetcher";
import Portfolio from "../../organisms/portfolio";

import { ContainedWidth } from "../../../styles/styles";

export const PortfolioTemplate = () => {
  return (
    <ContainedWidth>
      <Fetcher
        fetchMethod={{
          method: "posts"
        }}
        dataReducer={postsHandler}
        renderComponent={data => <Portfolio {...data} />}
      />
    </ContainedWidth>
  );
};
