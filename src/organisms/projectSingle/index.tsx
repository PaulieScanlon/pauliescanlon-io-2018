import * as React from "react";

import { ISinglePostData } from "../../types/data-types";

import { H3, P } from "../../styles/typography";

interface IProps {
  singlePost: ISinglePostData;
}

export const ProjectSingle: React.SFC<IProps> = ({ singlePost }) => {
  const { title, customExcerpt } = singlePost;
  return (
    <div>
      <p>ProjectSingle</p>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
    </div>
  );
};
