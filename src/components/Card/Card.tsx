import * as React from "react";
import Link from "next/link";

import { IPostData } from "../../types/data-types";

import { CardWrapper, CardText } from "./styles";

import { H2, P, Small } from "../../styles/typography";
import { TagsBlock } from "../TagsBlock";

import { draculaTheme } from "../../styles/theme";

interface IProps {
  cardData: IPostData;
}

export const Card: React.SFC<IProps> = ({ cardData }: IProps) => {
  const { customExcerpt, title, tags, slug, publishedAt } = cardData;

  return (
    <CardWrapper>
      <CardText>
        <Small fontColour={draculaTheme.cyan}>{publishedAt}</Small>
        <H2>{title}</H2>
        <P>{customExcerpt}</P>
        <TagsBlock tags={tags} />

        <Link
          href={{
            pathname: "/project",
            query: { slug: `${slug}` }
          }}
        >
          <a style={{ color: draculaTheme.green }}>View</a>
        </Link>
      </CardText>
    </CardWrapper>
  );
};
