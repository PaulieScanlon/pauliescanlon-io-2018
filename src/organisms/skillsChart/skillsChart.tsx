import * as React from "react";

import { ITagData } from "../../types/data-types";

interface IProps {
  tags: ITagData[];
}

export const SkillsChart = (props: IProps) => {
  const { tags } = props;
  console.log(tags)
  return (
    <div>skills charrt</div>
  );
};
