import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { Button, ButtonLink } from "./";
import { draculaTheme } from "../../styles/theme";

const stories = storiesOf("Button", module);

stories.add(
  "default usage",
  withInfo("Default theme")(() => <Button>Lorem Ipsum</Button>)
);

stories.add(
  "link usage",
  withInfo("Default theme")(() => <ButtonLink>Lorem Ipsum</ButtonLink>)
);

stories.add(
  "default & grow",
  withInfo("Grows to fill available width")(() => (
    <div style={{ display: "flex", width: 300 }}>
      <Button grow>Lorem Ipsum</Button>
    </div>
  ))
);

stories.add(
  "green",
  withInfo("Green theme")(() => (
    <Button backgroundColour={draculaTheme.green}>Lorem Ipsum</Button>
  ))
);

stories.add(
  "red",
  withInfo("Red theme")(() => (
    <Button backgroundColour={draculaTheme.red}>Lorem Ipsum</Button>
  ))
);
