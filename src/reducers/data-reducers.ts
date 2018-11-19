import moment from "moment";

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
    cvUrl: obj.website,
    availability: obj.slug,
    message: obj.name
  } as IUserData;
  return { userData };
};

export const postsHandler = (data: any) => {
  const posts = data.posts.map(
    (data: any): IPostData => ({
      customExcerpt: data.custom_excerpt,
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
  const sorted = data.tags.sort(
    (obj1: any, obj2: any) => obj2.count.posts - obj1.count.posts
  );

  const segment = sorted.slice(0, 5);

  const total = segment.reduce((sum: any, value: any) => {
    return sum + value.count.posts;
  }, 0);

  const tags = segment.map(
    (data: any): ITagData => ({
      name: data.name,
      count: data.count.posts,
      percent: Math.round((data.count.posts * 100) / total)
    })
  );

  return { tags };
};

export const pageHandler = (data: any) => {
  const obj = data.posts[0];
  const pageData = {
    html: obj.html
  };

  return { pageData };
};

export const gitHubActivityHandler = (data: any) => {
  const filtered = data.filter(
    (item: any) => item.repo.name !== "PaulieScanlon/pauliescanlon-io-2018"
  );

  const segment = filtered.slice(0, 5);

  const activity = segment.map((data: any) => {
    return {
      date: moment(`${data.created_at}`).format("DD/MM/YYYY"),
      type: data.type,
      repo: data.repo.name,
      url: `${process.env.GITHUB_URL}${data.repo.name}`
    };
  });

  return { activity };
};
