import * as React from "react";

import { IUserData } from "../../types/data-types";

import { UserWrapper } from "./styles";
import { SectionHeader } from "../SectionHeader";
import { P } from "../../styles/typography";
import { FlexItem } from "../FlexItem";

interface IProps {
  userData: IUserData;
}

export const User = ({ userData }: IProps) => {
  const { bio } = userData;

  return (
    <FlexItem xs={1} sm={1} md={1}>
      <UserWrapper>
        <SectionHeader leading="paul-scanlon" trailing="react-ui-developer()" />
        <P dangerouslySetInnerHTML={{ __html: bio }} />
      </UserWrapper>
    </FlexItem>
  );
};
