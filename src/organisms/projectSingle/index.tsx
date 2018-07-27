import * as React from "react";

import { IPostData } from "../../types/data-types";

import { H3, P } from "../../styles/typography";

export const ProjectSingle = (props: IPostData) => {
  const { customExcerpt, title } = props[0];

  return (
    <div>
      <p>ProjectSingle</p>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
    </div>
  );
};
