import * as React from "react";

import { Header } from "./styles";
import { H1 } from "../../styles/typography";

import { draculaTheme } from "../../styles/theme";

interface IProps {
  /**
   * Pink text
   *
   * @default none
   **/
  leading: string;
  /**
   * Cyan text
   *
   * @default none
   **/
  trailing: string;
}

export const SectionHeader = ({ leading, trailing }: IProps) => {
  return (
    <Header>
      <H1 fontColour={draculaTheme.green} display="inline-block">
        →&nbsp;
      </H1>
      <H1 fontColour={draculaTheme.pink} display="inline-block">
        {leading}
      </H1>

      <H1 fontColour={draculaTheme.cyan} display="inline-block">
        &nbsp;
        {trailing}
      </H1>
    </Header>
  );
};
