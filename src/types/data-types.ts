export interface IUserData {
  bio: string;
  cvUrl: string;
  availability: string;
  message: string;
}

export interface IPostData {
  customExcerpt: string;
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
  percent: number;
}

export interface IPageData {
  html: string;
}

export interface IActivityData {
  date: string;
  type: string;
  repo: string;
  url: string;
}
