import * as React from "react";

import { IPageData } from "../../types/data-types";

import { P } from "../../styles/typography";
import { SectionHeader } from "../SectionHeader";

import { PageDetailWrapper } from "./styles";

interface IProps {
  leading: string;
  pageData: IPageData;
}

export const PageDetail: React.SFC<IProps> = ({
  leading,
  pageData
}: IProps) => {
  const { html } = pageData;

  return (
    <PageDetailWrapper>
      <SectionHeader leading={leading} />
      <P dangerouslySetInnerHTML={{ __html: html }} />
    </PageDetailWrapper>
  );
};
