import * as React from "react";

import { IUserData } from "../../../types/data-types";

import { UserWrapper } from "./styles";

import { P } from "../../styles/typography";

interface IProps {
  userData: IUserData;
}

export const User = ({ userData }: IProps) => {
  const { bio } = userData;

  return (
    <UserWrapper>
      <P dangerouslySetInnerHTML={{ __html: bio }} />
    </UserWrapper>
  );
};
