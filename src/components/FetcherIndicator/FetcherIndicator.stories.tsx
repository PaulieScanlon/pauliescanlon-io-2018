import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { FetcherIndicator } from ".";

const stories = storiesOf("FetcherIndicator", module);

stories.add(
  "loading usage",
  withInfo("Displays loading message")(() => (
    <FetcherIndicator variant="loading" />
  ))
);

stories.add(
  "error usage",
  withInfo("Displays error message")(() => <FetcherIndicator variant="error" />)
);
