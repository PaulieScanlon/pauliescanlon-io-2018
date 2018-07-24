import * as React from "react";

import { IPostData } from "../../types/data-types";

interface IProps {
  posts: IPostData[];
  id: string;
}

export const Thing = (props: IProps) => {
  const { id, posts } = props;

  const single = posts.filter(post => post.id === id);

  const { title } = single["0"];

  return (
    <div>
      <p>Thing</p>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
};
