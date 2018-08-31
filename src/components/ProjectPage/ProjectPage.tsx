import * as React from "react";
import Router from "next/router";

import { ISinglePostData } from "../../types/data-types";

import { P } from "../../styles/typography";
import { Button } from "../Button";

interface IProps {
  singlePost: ISinglePostData;
}

export const ProjectPage = ({ singlePost }: IProps) => {
  const { title, customExcerpt, html } = singlePost;

  const clickHandler = () =>
    Router.push({
      pathname: "/"
    });

  return (
    <div>
      <p>ProjectSingle</p>
      <P>{title}</P>
      <P>{customExcerpt}</P>
      <P dangerouslySetInnerHTML={{ __html: html }} />
      <Button onClick={clickHandler}>Back</Button>
    </div>
  );
};
