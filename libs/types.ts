export type NotRequired<T> = T | null | undefined;

export type Category = {
  id: string;
  name: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type Portfolio = {
  title:string;
  description:string;
  eyecatch: NotRequired<string>;
  web_url:NotRequired<string>;
  resume_url: NotRequired<string>;
  github_url: NotRequired<string>;
}

export type About = {
  id: string;
  name: string;
  history: string;
  profile: string;
  icon: NotRequired<string>;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
  portfolios: Array<NotRequired<Portfolio>>;
};

export type Eyecatch = {
  height: number;
  width: number;
  url: string;
};

export type Blog = {
  category: Category ;
  content: string;
  createdAt: string;
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string ;
  updatedAt: string;
  eyecatch: Eyecatch;
  toc_visible:boolean;
};
