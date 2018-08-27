import * as React from "react";

import { usersHandler } from "../../../reducers/data-reducers";

import Fetcher from "../../organisms/fetcher";
import User from "../../organisms/user";

import { ContainedWidth } from "../../../styles/styles";

export const IntroTemplate = () => {
  return (
    <ContainedWidth>
      <Fetcher
        fetchMethod={{
          method: "users",
          query: "1"
        }}
        dataReducer={usersHandler}
        renderComponent={data => <User {...data} />}
      />
    </ContainedWidth>
  );
};
