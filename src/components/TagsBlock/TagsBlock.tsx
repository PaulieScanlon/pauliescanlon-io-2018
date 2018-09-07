import * as React from "react";

import { getColourRange } from "../../utils/colour";
import { Tag } from "../Tag";

import { draculaTheme } from "../../styles/theme";
import { TagsBlockWrapper } from "./styles";

interface IProps {
  tags: string[];
}

export const TagsBlock: React.SFC<IProps> = ({ tags }: IProps) => {
  const colourRange = [draculaTheme.pink, draculaTheme.cyan];

  const colours = getColourRange(tags.length, colourRange);

  const allTheTags = tags.map((tag: any, i: number) => {
    return (
      <Tag
        key={i}
        tag={tag}
        fontColour={colours[i]}
        borderColour={colours[i]}
      />
    );
  });
  return <TagsBlockWrapper>{allTheTags}</TagsBlockWrapper>;
};
