import { IUserData, IPostData } from "../types/data-types";

const mapTags = (tags: any): string[] => {
  const tagNames = tags.map(tag => {
    return tag.name;
  });

  return tagNames;
};

export const usersHandler = (data: any): IUserData => {
  const userData = {
    bio: data.users[0].bio,
    coverImage: data.users[0].cover_image, //TODO return with process.env.GHOST_CMS
    name: data.users[0].name,
    profileImage: data.users[0].profile_image //TODO return with process.env.GHOST_CMS
  };
  return userData;
};

export const postsHandler = (data: any): IPostData => {
  const posts = data.posts.map((data: any) => {
    return {
      customExcerpt: data.custom_excerpt,
      featureImage: data.feature_image, //TODO return with process.env.GHOST_CMS
      featured: data.featured,
      html: data.html,
      id: data.id,
      publishedAt: data.published_at,
      slug: data.slug,
      tags: mapTags(data.tags),
      title: data.title,
      url: data.url //TODO return with process.env.GHOST_CMS ?
    };
  });
  return posts;
};
