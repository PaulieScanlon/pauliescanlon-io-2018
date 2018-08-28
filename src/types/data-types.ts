export interface IUserData {
  bio: string;
  coverImage: string;
  name: string;
  profileImage: string;
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
