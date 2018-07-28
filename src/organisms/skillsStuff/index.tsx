import * as React from "react";

import { ITagData } from "../../types/data-types";

export const SkillsStuff = (props: ITagData[]) => {
  const tags = Object.values(props).map((tag: ITagData, i) => {
    const { name, count } = tag;
    return (
      <div key={i}>
        <p>{name}</p>
        <p>{count}</p>
      </div>
    );
  });

  return <div>{tags}</div>;
};
