import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Card from "./";

import { data } from "./data.mock";

const stories = storiesOf("Molecules/Card", module);

stories.add("default usage", withInfo("...")(() => <Card {...data} />));
