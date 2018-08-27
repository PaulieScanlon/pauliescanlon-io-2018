import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import TechTop5 from "./";

import { data } from "./data.mock";

const stories = storiesOf("Organisms/Skills Chart", module);

stories.add("default usage", withInfo("...")(() => <TechTop5 tags={data} />));
