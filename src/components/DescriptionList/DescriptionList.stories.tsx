import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { DescriptionList } from "./";

import {
  defaultList,
  termList,
  termMoreList,
  descriptionList,
  descriptionMoreList
} from "./data.mock";

const stories = storiesOf("DescriptionList", module);

stories.add(
  "default usage",
  withInfo("Default string objects")(() => (
    <DescriptionList data={defaultList} />
  ))
);

stories.add(
  "term node",
  withInfo("Pass term as any React.ReactNode as seen here with x2 <span>")(
    () => <DescriptionList data={termList} />
  )
);

stories.add(
  "term node more",
  withInfo("Pass term as any React.ReactNode as seen here with x3 <span>")(
    () => <DescriptionList data={termMoreList} />
  )
);

stories.add(
  "description node",
  withInfo("Pass description as any React.ReactNode as seen here with <a>")(
    () => <DescriptionList data={descriptionList} />
  )
);

stories.add(
  "description node more",
  withInfo("Pass description as any React.ReactNode as seen here with <span>")(
    () => <DescriptionList data={descriptionMoreList} />
  )
);
