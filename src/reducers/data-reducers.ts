import { IUserData, IPostData, ITagData } from "../types/data-types";

const mapTags = (tags: any): string[] => {
  const tagNames = tags.map(tag => {
    return tag.name;
  });

  return tagNames;
};

export const usersHandler = (data: any): IUserData => {
  const userData = {
    bio: data.users[0].bio,
    coverImage: `${process.env.GHOST_CMS}${data.users[0].cover_image}`,
    name: data.users[0].name,
    profileImage: `${process.env.GHOST_CMS}${data.users[0].profile_image}`
  };
  return userData;
};

export const postsHandler = (data: any): IPostData => {
  const posts = data.posts.map((data: any) => {
    return {
      customExcerpt: data.custom_excerpt,
      featureImage: `${process.env.GHOST_CMS}${data.feature_image}`,
      featured: data.featured,
      html: data.html,
      id: data.id,
      publishedAt: data.published_at,
      slug: data.slug,
      tags: mapTags(data.tags),
      title: data.title,
      url: data.url //@TODO return with process.env.GHOST_CMS ?
    };
  });
  return posts;
};

export const tagsHandler = (data: any): ITagData => {
  const tags = data.tags.map((data: any) => {
    return {
      name: data.name,
      count: data.count.posts
    };
  });

  return tags;
};
