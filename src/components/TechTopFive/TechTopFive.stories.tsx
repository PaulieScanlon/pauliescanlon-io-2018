import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { TechTopFive } from "./";

import { tags } from "./data.mock";

const stories = storiesOf("Tech Top Five", module);

stories.add(
  "default usage",
  withInfo("TechTopFive displays a list of 5 most used tags")(() => (
    <TechTopFive
      leading={tags.leading}
      trailing={tags.trailing}
      tags={tags.details}
    />
  ))
);
