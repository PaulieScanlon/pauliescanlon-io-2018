import * as React from "react";

import { TagWrapper } from "./styles";

interface IProps {
  tag: string;
  fontColour: string;
  borderColour: string;
}

export const Tag: React.SFC<IProps> = (props: IProps) => {
  const { tag, fontColour, borderColour } = props;

  return (
    <TagWrapper fontColour={fontColour} borderColour={borderColour}>
      {tag}
    </TagWrapper>
  );
};
