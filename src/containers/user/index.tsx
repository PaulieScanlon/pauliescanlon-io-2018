import * as React from 'react';

import { UserWrapper } from './styles';

import { IUserData } from '../../types/data-types';

import { H2, P } from '../../styles/typography';

export const User = (props: IUserData) => {
  // export const User: React.SFC<IUserData> = props => {
  const { bio, coverImage, name, profileImage } = props;
  return (
    <UserWrapper>
      <H2>{name}</H2>
      <P fontColour="#ff00ff">{bio}</P>
      <img
        style={{ width: 100 }}
        src={`${process.env.GHOST_CMS}${coverImage}`}
      />

      <img
        style={{ width: 50 }}
        src={`${process.env.GHOST_CMS}${profileImage}`}
      />
    </UserWrapper>
  );
};
