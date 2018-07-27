import * as React from "react";

import { usersHandler } from "../../reducers/data-reducers";

import { Fetcher } from "../../organisms/fetcher";
import { User } from "../../organisms/user";

import { FullWidth } from "../../styles";

export const Intro: React.SFC = () => {
  return (
    <FullWidth>
      <Fetcher
        fetchMethod={{
          method: "users",
          query: "1"
        }}
        dataReducer={usersHandler}
        renderComponent={data => <User {...data} />}
      />
    </FullWidth>
  );
};
