import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { Card } from "./";

const data = {
  customExcerpt: "custom excerpt",
  featureImage: "http://www.image.com",
  featured: false,
  html: "This is the html",
  id: "12345",
  publishedAt: "122345i",
  slug: "card",
  tags: ["tag1", "tag2", "tag3"],
  title: "This is the title",
  url: "http://wwww.pauliescanlon.io"
};

const stories = storiesOf("Molecules/Card", module);

stories.add("default usage", withInfo("...")(() => <Card {...data} />));
