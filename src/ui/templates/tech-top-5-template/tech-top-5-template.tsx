import * as React from "react";

import { tagsHandler } from "../../../reducers/data-reducers";

import Fetcher from "../../organisms/fetcher";
import TechTop5 from "../../organisms/tech-top-5";

import { FlexItem } from "../../atoms/flex-grid/styles";

export const TechTop5Template = () => {
  return (
    <FlexItem xs={1} sm={2} md={3}>
      <p>TechTop5Template</p>
      <Fetcher
        fetchMethod={{
          method: "tags"
        }}
        dataReducer={tagsHandler}
        renderComponent={data => <TechTop5 {...data} />}
      />
    </FlexItem>
  );
};
