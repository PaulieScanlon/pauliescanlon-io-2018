import * as React from "react";

import { tagsHandler } from "../../../reducers/data-reducers";

import FlexItem from "../../atoms/flex-item";
import Fetcher from "../../organisms/fetcher";
import TechTopFive from "../../organisms/tech-top-five";

import { ThreeGridWrapper } from "./styles";

export const ThreeGridTemplate = () => {
  return (
    <ThreeGridWrapper>
      <FlexItem xs={1} sm={1} md={3}>
        <Fetcher
          fetchMethod={{
            method: "tags"
          }}
          dataReducer={tagsHandler}
          renderComponent={data => <TechTopFive {...data} />}
        />
      </FlexItem>
    </ThreeGridWrapper>
  );
};
