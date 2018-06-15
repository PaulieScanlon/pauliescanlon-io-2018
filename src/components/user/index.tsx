import * as React from 'react';

import { UserWrapper } from './styles';

import { IUserData } from '../../types/api-types';

export const User = (props: IUserData) => {
  // export const User: React.SFC<IUserData> = props => {
  const { bio, coverImage, name, profileImage } = props;

  return (
    <UserWrapper>
      <p>{bio}</p>
      <p>Test</p>
      <img
        style={{ width: 100 }}
        src={`${process.env.GHOST_CMS}${coverImage}`}
      />
      <p>{name}</p>
      <img
        style={{ width: 50 }}
        src={`${process.env.GHOST_CMS}${profileImage}`}
      />
    </UserWrapper>
  );
};
