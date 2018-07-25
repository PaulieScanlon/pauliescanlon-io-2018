import * as React from "react";

import { IUserData } from "../../types/data-types";

import { UserWrapper, UserDetails, UserProfile } from "./styles";
import { Button } from "../../components/btn";

import { H2, P } from "../../styles/typography";
import { theme } from "../../styles/theme";
import { px } from "../../styles/breakpoints";

export const User = (props: IUserData) => {
  // export const User: React.SFC<IUserData> = props => {
  const { bio, coverImage, name, profileImage } = props;

  return (
    <UserWrapper>
      <UserDetails backgroundSrc={coverImage}>
        <UserProfile src={profileImage} />
        <H2 fontColour={theme.white} fontAlign="center">
          {name}
        </H2>
        <P maxWidth={px.sm} fontColour={theme.white} fontAlign="center">
          {bio}
        </P>
        <Button buttonColour={theme.pink} fontColour={theme.white}>
          CV
        </Button>
      </UserDetails>
    </UserWrapper>
  );
};
