import { draculaTheme } from "../src/styles/theme";
import { addDecorator, configure } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import withBackgrounds from "@storybook/addon-backgrounds";

const req = require.context("../src/", true, /\.stories\.tsx$/);

function loadStories() {
  addDecorator(
    withBackgrounds([
      {
        name: "draculaTheme.background",
        value: draculaTheme.background,
        default: true
      }
    ])
  );
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

addDecorator(story => <div style={{ padding: 10 }}>{story()}</div>);

setDefaults({
  header: false,
  inline: true,
  source: true
});

configure(loadStories, module);
