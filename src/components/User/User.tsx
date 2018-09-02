import * as React from "react";

import { IUserData } from "../../types/data-types";

import { UserWrapper } from "./styles";
import { SectionHeader } from "../SectionHeader";
import { P } from "../../styles/typography";

interface IProps {
  userData: IUserData;
}

export const User = ({ userData }: IProps) => {
  const { bio } = userData;

  return (
    <UserWrapper>
      <SectionHeader leading="paul-scanlon" trailing="react-ui-developer()" />
      <P dangerouslySetInnerHTML={{ __html: bio }} />
    </UserWrapper>
  );
};
