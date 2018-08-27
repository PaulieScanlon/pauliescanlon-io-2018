import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Button from "./";

const stories = storiesOf("Atoms/Button", module);

stories.add(
  "default inverted",
  withInfo("Default theme")(() => <Button>Hooray</Button>)
);
