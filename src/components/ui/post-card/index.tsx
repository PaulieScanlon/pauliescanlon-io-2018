import * as React from 'react';

import { CardWrapper } from './styles';
import { IPostData } from '../../../types/api-types';

export const PostCard = (postData: IPostData) => {
  const { title } = postData;

  return (
    <CardWrapper>
      <p>{title}</p>
    </CardWrapper>
  );
};
