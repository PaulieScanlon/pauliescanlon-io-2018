import * as React from "react";
import { storiesOf } from "@storybook/react";

import { theme } from "../../styles/theme";

import { Button } from "./";

const stories = storiesOf("Atoms/Button", module);

stories.add("default usage", () => <Button>Hooray</Button>);

stories.add("blue", () => <Button buttonColour={theme.blue}>Hooray</Button>);

stories.add("purle", () => <Button buttonColour={theme.purple}>Hooray</Button>);

stories.add("haze", () => <Button buttonColour={theme.haze}>Hooray</Button>);

stories.add("white", () => (
  <Button buttonColour={theme.white} fontColour={theme.darkest}>
    Hooray
  </Button>
));
