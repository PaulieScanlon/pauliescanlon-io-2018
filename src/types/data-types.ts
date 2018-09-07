export interface IUserData {
  bio: string;
  cvUrl: string;
  displayCvUrl: string;
  availability: string;
  message: string;
}

export interface IPostData {
  /**
   * Short description for use in card
   *
   * @default " "
   **/
  customExcerpt: string;
  /**
   * Absolute url to image
   *
   * @default " "
   **/
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

export interface IPageListData {
  html: string;
}

export interface IActivityData {
  date: string;
  type: string;
  repo: string;
  url: string;
}
