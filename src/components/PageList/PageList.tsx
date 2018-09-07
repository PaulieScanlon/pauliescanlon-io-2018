import * as React from "react";
import { SectionHeader } from "../SectionHeader";

import { IPageListData } from "../../types/data-types";

import { ListWrapper } from "./styles";

interface IProps {
  leading: string;
  companies: IPageListData;
}

export const PageList: React.SFC<IProps> = ({ leading, companies }: IProps) => {
  const { html } = companies;

  return (
    <ListWrapper>
      <SectionHeader leading={leading} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ListWrapper>
  );
};
