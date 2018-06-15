import * as React from 'react';

import { PostWrapper } from './styles';

// import { IPostData } from '../../types/api-types';

export const Post = (props: any) => {
  // export const User: React.SFC<IUserData> = props => {
  console.log('Post: ', props);
  return (
    <PostWrapper>
      <p>Post</p>
    </PostWrapper>
  );
};
