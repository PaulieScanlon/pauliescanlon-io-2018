import * as React from "react";
import Link from "next/link";

import { IPostData } from "../../types/data-types";

import { CardWrapper } from "./styles";
import { H3, P } from "../../styles/typography";

export const Card = (postData: IPostData) => {
  const { customExcerpt, id, title, url } = postData;

  return (
    <CardWrapper>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
      <Link href={{ pathname: "/asd", query: { post: `${id}` } }} passHref>
        <a>{id}</a>
      </Link>
      {/* @TODO can this be used as a tidy url thing */}
      <P>{url}</P>
    </CardWrapper>
  );
};
