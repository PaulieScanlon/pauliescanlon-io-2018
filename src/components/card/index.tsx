import * as React from 'react';

import { IPostData } from '../../types/data-types';

import { CardWrapper } from './styles';
import { H3, P } from '../../styles/typography';

export const Card = (postData: IPostData) => {
  const { title, customExcerpt } = postData;

  return (
    <CardWrapper>
      <H3>{title}</H3>
      <P>{customExcerpt}</P>
    </CardWrapper>
  );
};
