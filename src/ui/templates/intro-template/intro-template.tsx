import * as React from "react";

import { usersHandler } from "../../../reducers/data-reducers";

import FlexItem from "../../atoms/flex-item";
import Fetcher from "../../organisms/fetcher";
import User from "../../organisms/user";
import SectionHeader from "../../atoms/section-header";

import { IntroWrapper } from "./styles";

export const IntroTemplate = () => {
  return (
    <IntroWrapper>
      <SectionHeader leading="paul-scanlon" trailing="react-ui-developer()" />
      <FlexItem xs={1} sm={1} md={1}>
        <Fetcher
          fetchMethod={{
            method: "users",
            query: "1"
          }}
          dataReducer={usersHandler}
          renderComponent={data => <User {...data} />}
        />
      </FlexItem>
    </IntroWrapper>
  );
};
