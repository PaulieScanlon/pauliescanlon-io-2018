import * as React from "react";

import { postsHandler } from "../../../reducers/data-reducers";

import Fetcher from "../../organisms/fetcher";
import Portfolio from "../../organisms/portfolio";

export const PortfolioTemplate = () => {
  return (
    <Fetcher
      fetchMethod={{
        method: "posts"
      }}
      dataReducer={postsHandler}
      renderComponent={data => <Portfolio {...data} />}
    />
  );
};
