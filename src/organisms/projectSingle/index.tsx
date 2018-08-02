import * as React from "react";
import Router from "next/router";

import { Button } from "../../atoms/button";
import { theme } from "../../styles/theme";

import { ISinglePostData } from "../../types/data-types";

import { H3, P } from "../../styles/typography";

interface IProps {
  singlePost: ISinglePostData;
}

export const ProjectSingle: React.SFC<IProps> = ({ singlePost }) => {
  const { title, customExcerpt } = singlePost;

  const handler = () =>
    Router.push({
      pathname: "/"
    });

  return (
    <div>
      <p>ProjectSingle</p>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
      <Button
        onClick={handler}
        buttonColour={theme.pink}
        fontColour={theme.white}
      >
        back
      </Button>
    </div>
  );
};
