import * as React from "react";

import { IPostData } from "../../types/data-types";

import { H3, P } from "../../styles/typography";

export const SingleItem = (props: IPostData) => {
  const { customExcerpt, title } = props[0];

  return (
    <div>
      <p>SingleItem</p>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
    </div>
  );
};
