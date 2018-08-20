import { addDecorator, configure } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import withBackgrounds from "@storybook/addon-backgrounds";
import { themeObjects } from "../src/styles/theme";

const req = require.context("../src/", true, /\.stories\.tsx$/);

function loadStories() {
  addDecorator(
    withBackgrounds([
      {
        name: "default.primary",
        value: themeObjects.default.primary,
        default: true
      }
    ])
  );
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  header: false,
  inline: true,
  source: true
});

addDecorator(withKnobs);

configure(loadStories, module);
