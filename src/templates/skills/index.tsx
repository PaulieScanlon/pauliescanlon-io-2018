import * as React from "react";

import { tagsHandler } from "../../reducers/data-reducers";

import { Fetcher } from "../../organisms/fetcher";
import { SkillsStuff } from "../../organisms/skillsStuff";

import { ContainedWidth } from "../../styles";

export const Skills: React.SFC = () => {
  return (
    <ContainedWidth>
      <p>Skills</p>
      <Fetcher
        fetchMethod={{
          method: "tags"
        }}
        dataReducer={tagsHandler}
        renderComponent={data => <SkillsStuff {...data} />}
      />
    </ContainedWidth>
  );
};
