import * as React from "react";

import { ITagData } from "../../../types/data-types";

interface IProps {
  tags: ITagData[];
}

export const TechTopFive = ({ tags }: IProps) => {
  const list = tags.map((tag, i) => {
    return (
      <React.Fragment key={i}>
        <dt>{tag.name}</dt>
        <dd>{tag.count}</dd>
        <dd>{tag.percent}</dd>
      </React.Fragment>
    );
  });

  return <dl>{list}</dl>;
};
