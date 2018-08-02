import {
  IUserData,
  IPostData,
  ISinglePostData,
  ITagData
} from "../types/data-types";

const mapTags = (tags: any): string[] => {
  const tagNames = tags.map((tag: any) => {
    return tag.name;
  });

  return tagNames;
};

export const usersHandler = (data: any) => {
  const obj = data.users[0];
  const userData = {
    bio: obj.bio,
    coverImage: `${process.env.GHOST_CMS}${obj.cover_image}`,
    name: obj.name,
    profileImage: `${process.env.GHOST_CMS}${obj.profile_image}`
  } as IUserData;
  return { userData };
};

export const postsHandler = (data: any) => {
  const posts = data.posts.map(
    (data: any): IPostData => ({
      customExcerpt: data.custom_excerpt,
      featureImage: `${process.env.GHOST_CMS}${data.feature_image}`,
      featured: data.featured,
      html: data.html,
      id: data.id,
      publishedAt: data.published_at,
      slug: data.slug,
      tags: mapTags(data.tags),
      title: data.title,
      url: `${process.env.GHOST_CMS}${data.url}`
    })
  );

  return { posts };
};

export const singlePostHandler = (data: any) => {
  const obj = data.posts[0];
  const singlePost = {
    customExcerpt: obj.custom_excerpt,
    featureImage: `${process.env.GHOST_CMS}${obj.feature_image}`,
    html: obj.html,
    publishedAt: obj.published_at,
    slug: obj.slug,
    tags: mapTags(obj.tags),
    title: obj.title
  } as ISinglePostData;

  return { singlePost };
};

export const tagsHandler = (data: any) => {
  const tags = data.tags.map(
    (data: any): ITagData => ({
      name: data.name,
      count: data.count.posts
    })
  );

  return { tags };
};
