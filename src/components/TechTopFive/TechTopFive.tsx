import * as React from "react";

import { ITagData } from "../../types/data-types";

import { SectionHeader } from "../SectionHeader";
import { DescriptionList } from "../DescriptionList";
import { draculaTheme } from "../../styles/theme";

import { TechTopFiveWrapper, BarWrapper, SimpleBar } from "./styles";

interface IProps {
  leading: string;
  trailing: string;
  tags: ITagData[];
}

export const TechTopFive: React.SFC<IProps> = (props: IProps) => {
  const { leading, trailing, tags } = props;

  const listData = tags.map(tag => {
    return {
      term: (
        <div>
          <span>
            {tag.name}
            &nbsp;
          </span>
          <span style={{ color: `${draculaTheme.comment}` }}>
            {tag.percent}
          </span>
          <span style={{ color: `${draculaTheme.red}` }}>%</span>
        </div>
      ),
      description: (
        <BarWrapper>
          <span>[</span>
          <SimpleBar width={tag.percent * 2.5} />
          <span>]</span>
        </BarWrapper>
      )
    };
  });

  return (
    <TechTopFiveWrapper>
      <SectionHeader leading={leading} trailing={trailing} />
      <DescriptionList data={listData} />
    </TechTopFiveWrapper>
  );
};
