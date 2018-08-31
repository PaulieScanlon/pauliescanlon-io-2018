import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { ContactDetails } from "./";

import { details } from "./data.mock";

const stories = storiesOf("Contact Details", module);

stories.add(
  "default usage",
  withInfo(
    "ContactDetails is a child of <FlexItem> and displays a list of 5 contact methods"
  )(() => <ContactDetails details={details} />)
);
