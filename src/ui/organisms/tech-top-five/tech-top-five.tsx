import * as React from "react";

import { ITagData } from "../../../types/data-types";

import { TechTopFiveWrapper } from "./styles";
import SectionHeader from "../../atoms/section-header";

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
    <TechTopFiveWrapper>
      <SectionHeader leading="tech" trailing="top-5-by-usage()" />
      <dl>{list}</dl>
    </TechTopFiveWrapper>
  );
};
