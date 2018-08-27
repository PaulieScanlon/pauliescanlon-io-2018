import * as React from "react";

import { IUserData } from "../../../types/data-types";

import { UserWrapper, UserText } from "./styles";

import { P } from "../../../styles/typography";
import { px } from "../../../styles/breakpoints";

interface IProps {
  userData: IUserData;
}

export const User = ({ userData }: IProps) => {
  const { bio, name } = userData;

  return (
    <UserWrapper>
      <UserText>
        <P>{name}</P>
        <P maxWidth={px.sm} dangerouslySetInnerHTML={{ __html: bio }} />
      </UserText>
    </UserWrapper>
  );
};
