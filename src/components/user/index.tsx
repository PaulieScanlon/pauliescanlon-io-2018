import * as React from 'react';

import { IUser } from '../../types/api-types';
import { UserWrapper } from './styles';

interface IProps extends IUser {}

export const User: React.SFC<IProps> = props => {
  const { bio, cover_image, name, profile_image } = props[0];

  return (
    <UserWrapper>
      <p>{bio}</p>

      <p>Test</p>
      <img
        style={{ width: 100 }}
        src={`${process.env.GHOST_CMS}${cover_image}`}
      />
      <p>{name}</p>
      <img
        style={{ width: 50 }}
        src={`${process.env.GHOST_CMS}${profile_image}`}
      />
    </UserWrapper>
  );
};
