import * as React from "react";
import changeCase from "change-case";

import { IActivityData } from "../../types/data-types";

import { SectionHeader } from "../SectionHeader";
import { DescriptionList } from "../DescriptionList";

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
          <span className={`efault-event ${changeCase.paramCase(item.type)}`}>
            {item.type}
          </span>
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
