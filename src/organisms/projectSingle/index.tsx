import * as React from "react";
import Router from "next/router";

import Button from "../../atoms/button";
import { themeObjects } from "../../styles/theme";

import { ISinglePostData } from "../../types/data-types";

import { H3, P } from "../../styles/typography";

interface IProps {
  singlePost: ISinglePostData;
}

export const ProjectSingle: React.SFC<IProps> = ({ singlePost }) => {
  const { title, customExcerpt, html } = singlePost;

  const handler = () =>
    Router.push({
      pathname: "/"
    });

  return (
    <div>
      <p>ProjectSingle</p>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
      <P dangerouslySetInnerHTML={{ __html: html }} />
      <Button theme={themeObjects.pink} onClick={handler}>
        Back
      </Button>
    </div>
  );
};
