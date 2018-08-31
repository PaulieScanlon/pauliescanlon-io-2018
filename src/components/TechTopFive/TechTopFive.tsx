import * as React from "react";

import { ITagData } from "../../types/data-types";

import { SectionHeader } from "../SectionHeader";
import { FlexItem } from "../FlexItem";
import { DescriptionList } from "../DescriptionList";
import { draculaTheme } from "../../styles/theme";

import { BarWrapper, SimpleBar } from "./styles";
interface IProps {
  tags: ITagData[];
}

export const TechTopFive: React.SFC<IProps> = (props: IProps) => {
  const { tags } = props;

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

    // <DescriptionList
    //   key={i}
    //   leading={tag.name}
    //   trailing={tag.count}
    //   suffix={tag.percent}
    // />
  });

  return (
    <FlexItem xs={1} sm={2} md={3}>
      <SectionHeader leading="tech" trailing="top-5-by-usage()" />
      <DescriptionList data={listData} />
    </FlexItem>
  );
};
