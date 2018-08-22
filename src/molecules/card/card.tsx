import * as React from "react";
// import Link from "next/link";
// import Router from "next/router";

import { IPostData } from "../../types/data-types";

import { CardImage, CardWrapper, CardText } from "./styles";
import { H3, P } from "../../styles/typography";

export const Card = (postData: IPostData) => {
  const { customExcerpt, featureImage, id, title } = postData;

  // const handler = () =>
  //   Router.push({
  //     pathname: "/work",
  //     query: { project: `${id}` }
  //   });

  return (
    <CardWrapper>
      <CardImage src={featureImage} />
      <CardText>
        <H3>{title}</H3>
        <P>{customExcerpt}</P>
      </CardText>
    </CardWrapper>
  );
};
