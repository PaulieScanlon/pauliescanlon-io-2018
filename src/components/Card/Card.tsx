import * as React from "react";
// import Link from "next/link";
import Router from "next/router";

import { IPostData } from "../../types/data-types";

import { CardWrapper, CardText, TagsBlock } from "./styles";
import { Tag } from "../Tag";
import { H2, P } from "../../styles/typography";
import { Button } from "../Button";

import { getColourRange } from "../../utils/colour";
import { draculaTheme } from "../../styles/theme";

export const Card = (postData: IPostData) => {
  const { customExcerpt, id, title, tags } = postData;

  const clickHandler = () =>
    Router.push({
      pathname: "/project",
      query: { project: `${id}` }
    });

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
        <Button onClick={clickHandler}>View</Button>
      </CardText>
    </CardWrapper>
  );
};
