import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { PageList } from "./";

import { data } from "./data.mock";

const stories = storiesOf("PageList", module);

stories.add(
  "default usage",
  withInfo("PageList renders api repsonses provided in a ul / li")(() => (
    <PageList leading="lorem" pageData={data} />
  ))
);
