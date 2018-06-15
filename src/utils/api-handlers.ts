import { IUserData } from '../types/api-types';

export const usersHandler = (data: any): IUserData => {
  const userData = {
    bio: data[0].bio,
    coverImage: data[0].cover_image,
    name: data[0].name,
    profileImage: data[0].profile_image
  };
  return userData;
};

export const postsHandler = (data: any): any => {
  return data;
};
