import * as React from "react";
import Link from "next/link";

import { IPostData } from "../../types/data-types";

import { CardWrapper, CardText, TagsBlock } from "./styles";
import { Tag } from "../Tag";
import { H2, P } from "../../styles/typography";

import { getColourRange } from "../../utils/colour";
import { draculaTheme } from "../../styles/theme";

export const Card = (postData: IPostData) => {
  const { customExcerpt, id, title, tags } = postData;

  const colourRange = [draculaTheme.pink, draculaTheme.cyan];

  const colours = getColourRange(tags.length, colourRange);

  const allTheTags = tags.map((tag, i) => {
    return (
      <Tag
        key={i}
        tag={tag}
        fontColour={colours[i]}
        borderColour={colours[i]}
      />
    );
  });

  return (
    <CardWrapper>
      <CardText>
        <H2>{title}</H2>
        <P>{customExcerpt}</P>
        <TagsBlock>{allTheTags}</TagsBlock>

        <Link
          href={{
            pathname: "/project",
            query: { project: `${id}` }
          }}
        >
          <a>View</a>
        </Link>
      </CardText>
    </CardWrapper>
  );
};
