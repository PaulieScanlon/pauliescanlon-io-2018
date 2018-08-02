export interface IUserData {
  bio: string;
  coverImage: string;
  name: string;
  profileImage: string;
}

export interface IPostData {
  customExcerpt: string;
  featureImage: string;
  featured: boolean;
  html: string;
  id: string;
  publishedAt: string;
  slug: string;
  tags: string[];
  title: string;
  url: string;
}

export interface ISinglePostData {
  customExcerpt: string;
  featureImage: string;
  html: string;
  publishedAt: string;
  slug: string;
  tags: string[];
  title: string;
}

export interface ITagData {
  name: string;
  count: number;
}
