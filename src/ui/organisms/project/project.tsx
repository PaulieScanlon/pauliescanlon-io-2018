import * as React from "react";
import Router from "next/router";

import Button from "../../atoms/button";

import { ISinglePostData } from "../../../types/data-types";

import { P } from "../../styles/typography";

interface IProps {
  singlePost: ISinglePostData;
}

export const Project = ({ singlePost }: IProps) => {
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
