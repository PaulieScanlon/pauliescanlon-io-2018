import * as React from "react";

import { IActivityData } from "../../types/data-types";

import { SectionHeader } from "../SectionHeader";
import { DescriptionList } from "../DescriptionList";
import { draculaTheme } from "../../styles/theme";

import { GitHubActivityWrapper, RepoLink } from "./styles";

interface IProps {
  leading: string;
  trailing: string;
  activity: IActivityData[];
}

export const GitHubActivity: React.SFC<IProps> = (props: IProps) => {
  const { leading, trailing, activity } = props;

  const listData = activity.map(item => {
    return {
      term: (
        <div>
          <span>
            {item.date}
            &nbsp;
          </span>
          <span style={{ color: `${draculaTheme.pink}` }}>{item.type}</span>
        </div>
      ),
      description: (
        <RepoLink href={item.url} target="_blank">
          {item.repo}
        </RepoLink>
      )
    };
  });

  return (
    <GitHubActivityWrapper>
      <SectionHeader leading={leading} trailing={trailing} />
      <DescriptionList data={listData} />
    </GitHubActivityWrapper>
  );
};
