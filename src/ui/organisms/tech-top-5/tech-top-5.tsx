import * as React from "react";

import { ITagData } from "../../types/data-types";

interface IProps {
  tags: ITagData[];
}

export const TechTop5 = (props: IProps) => {
  const { tags } = props;
  console.log(tags);
  return <div style={{ width: "100%", border: "1px solid red" }}>TechTop5</div>;
};
