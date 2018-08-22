import * as React from "react";

import { IUserData } from "../../types/data-types";

import { UserWrapper, UserText, UserProfile } from "./styles";

import { H2, P } from "../../styles/typography";
import { px } from "../../styles/breakpoints";

interface IProps {
  userData: IUserData;
}

export const User: React.SFC<IProps> = ({ userData }) => {
  const { bio, name, profileImage } = userData;

  return (
    <UserWrapper>
      <UserText>
        <UserProfile src={profileImage} />
        <H2>{name}</H2>
        <P maxWidth={px.sm} dangerouslySetInnerHTML={{ __html: bio }} />
      </UserText>
    </UserWrapper>
  );
};
