import * as React from "react";

import { tagsHandler } from "../../../reducers/data-reducers";

import FlexItem from "../../atoms/flex-item";
import Fetcher from "../../organisms/fetcher";
import TechTopFive from "../../organisms/tech-top-five";

export const TechTopFiveTemplate = () => {
  return (
    <FlexItem xs={1} sm={2} md={3}>
      <Fetcher
        fetchMethod={{
          method: "tags"
        }}
        dataReducer={tagsHandler}
        renderComponent={data => <TechTopFive {...data} />}
      />
    </FlexItem>
  );
};
