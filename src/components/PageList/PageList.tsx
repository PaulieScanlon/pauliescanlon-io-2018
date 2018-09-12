import * as React from "react";
import { SectionHeader } from "../SectionHeader";

import { IPageData } from "../../types/data-types";

import { ListWrapper } from "./styles";

interface IProps {
  leading: string;
  pageData: IPageData;
}

export const PageList: React.SFC<IProps> = ({ leading, pageData }: IProps) => {
  const { html } = pageData;

  return (
    <ListWrapper>
      <SectionHeader leading={leading} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ListWrapper>
  );
};
