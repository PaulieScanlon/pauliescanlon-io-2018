import * as React from 'react';

import { IPath } from '../../types/component-types';

interface IUsers {
  // accessibility: any;
  bio: string;
  cover_image: string;
  // facebook: string;
  // id: string;
  // locale: any;
  // location: string;
  // meta_description: any;
  // meta_title: any;
  name: string;
  profile_image: string;
  // slug: string;
  // tour: string;
  // twitter: string;
  // visibility: string;
  // website: string;
}

interface IProps extends IPath {
  data: IUsers[];
}

export const User: React.SFC<IProps> = ({ path, data }) => {
  const { bio, cover_image, name, profile_image } = data[0];

  return (
    <div>
      <p>{bio}</p>
      <img style={{ width: 100 }} src={`${path}${cover_image}`} />
      <p>{name}</p>
      <img style={{ width: 50 }} src={`${path}${profile_image}`} />
    </div>
  );
};
