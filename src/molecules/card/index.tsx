import * as React from "react";
// import Link from "next/link";
import Router from "next/router";

import { IPostData } from "../../types/data-types";

import { Button } from "../../atoms/button";

import { CardWrapper } from "./styles";
import { theme } from "../../styles/theme";
import { H3, P } from "../../styles/typography";

export const Card = (postData: IPostData) => {
  const { customExcerpt, id, title } = postData;

  const handler = () =>
    Router.push({
      pathname: "/work",
      query: { project: `${id}` }
    });

  return (
    <CardWrapper>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
      <Button
        onClick={handler}
        buttonColour={theme.pink}
        fontColour={theme.white}
      >
        view
      </Button>
    </CardWrapper>
  );
};
