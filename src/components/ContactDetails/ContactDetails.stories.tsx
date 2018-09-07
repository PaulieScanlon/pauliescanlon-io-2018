import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { ContactDetails } from "./";

import { contact } from "./data.mock";

const stories = storiesOf("Contact Details", module);

stories.add(
  "default usage",
  withInfo("ContactDetails displays a list of 5 contact methods")(() => (
    <ContactDetails leading={contact.leading} details={contact.details} />
  ))
);
