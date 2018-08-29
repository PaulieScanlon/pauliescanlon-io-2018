import * as React from "react";
// import Link from "next/link";
import Router from "next/router";

import { IPostData } from "../../../types/data-types";

import { CardWrapper, CardText } from "./styles";
import { P } from "../../styles/typography";
import Button from "../../atoms/button";

export const Card = (postData: IPostData) => {
  const { customExcerpt, id, title } = postData;

  const clickHandler = () =>
    Router.push({
      pathname: "/project",
      query: { project: `${id}` }
    });

  return (
    <CardWrapper>
      <CardText>
        <h3>{title}</h3>
        <P>{customExcerpt}</P>
        <Button onClick={clickHandler}>View</Button>
      </CardText>
    </CardWrapper>
  );
};
