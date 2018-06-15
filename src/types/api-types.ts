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
  tags: any; // TODO type to ITags
  title: string;
  url: string;
}
