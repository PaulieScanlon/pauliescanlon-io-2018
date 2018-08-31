import * as React from "react";

import { DL, DT, DD } from "./styles";

interface IData {
  term: React.ReactNode;
  description: React.ReactNode;
}

interface IProps {
  data: IData[];
}

export const DescriptionList: React.SFC<IProps> = (props: IProps) => {
  const { data } = props;

  const dataList = data.map((list, i) => {
    return (
      <React.Fragment key={i}>
        <DT>{list.term}</DT>
        <DD>{list.description}</DD>
      </React.Fragment>
    );
  });

  return <DL>{dataList}</DL>;
};
