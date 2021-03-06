import * as React from "react";

import { P } from "../../styles/typography";
import { draculaTheme } from "../../styles/theme";

import { IndicatorWrapper } from "./styles";
import { cms } from "../../cms";

interface IProps {
  variant: string;
}

export const FetcherIndicator: React.SFC<IProps> = (props: IProps) => {
  const { variant } = props;

  const messages = {
    loading: "Loading",
    error: "Error"
  } as any;

  const getMessage = (variant: string) => messages[variant];

  return (
    <IndicatorWrapper>
      <P fontColour={draculaTheme.comment}>
        {cms.global}
        {getMessage(variant)}
      </P>
    </IndicatorWrapper>
  );
};
