import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { themeObjects } from "../../styles/theme";

import Button from "./";

const stories = storiesOf("Atoms/Button", module);

stories.add(
  "default inverted",
  withInfo("Default theme")(() => <Button>Hooray</Button>)
);

stories.add(
  "ghost",
  withInfo("Button in Ghost theme")(() => (
    <Button theme={themeObjects.ghost}>Hooray</Button>
  ))
);

stories.add(
  "cyan",
  withInfo("Button in Cyan theme")(() => (
    <Button theme={themeObjects.cyan}>Hooray</Button>
  ))
);

stories.add(
  "green",
  withInfo("Button in Green theme")(() => (
    <Button theme={themeObjects.green}>Hooray</Button>
  ))
);

stories.add(
  "orange",
  withInfo("Button in Orange theme")(() => (
    <Button theme={themeObjects.orange}>Hooray</Button>
  ))
);

stories.add(
  "pink",
  withInfo("Button in Pink theme")(() => (
    <Button theme={themeObjects.pink}>Hooray</Button>
  ))
);

stories.add(
  "purple",
  withInfo("Button in Purple theme")(() => (
    <Button theme={themeObjects.purple}>Hooray</Button>
  ))
);

stories.add(
  "red",
  withInfo("Button in Red theme")(() => (
    <Button theme={themeObjects.red}>Hooray</Button>
  ))
);

stories.add(
  "yellow",
  withInfo("Button in Yellow theme")(() => (
    <Button theme={themeObjects.yellow}>Hooray</Button>
  ))
);

stories.add(
  "pre",
  withInfo("Button in Pre theme")(() => (
    <Button theme={themeObjects.pre}>Hooray</Button>
  ))
);
