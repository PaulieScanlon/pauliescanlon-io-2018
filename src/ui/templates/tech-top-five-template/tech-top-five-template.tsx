import * as React from "react";

import { tagsHandler } from "../../../reducers/data-reducers";

import Fetcher from "../../organisms/fetcher";
import TechTopFive from "../../organisms/tech-top-five";

import { FlexItem } from "../../atoms/flex-grid/styles";

export const TechTopFiveTemplate = () => {
  return (
    <FlexItem xs={1} sm={2} md={3}>
      <p>TechTop5Template</p>
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
