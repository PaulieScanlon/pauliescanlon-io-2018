import * as React from "react";

import { ITagData } from "../../types/data-types";

import { SectionHeader } from "../SectionHeader";
import { FlexItem } from "../FlexItem";

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

  return (
    <FlexItem xs={1} sm={2} md={3}>
      <SectionHeader leading="tech" trailing="top-5-by-usage()" />
      <dl>{list}</dl>
    </FlexItem>
  );
};
