export type PostMeta = {
  id: string;
  title: string;
  date: Date | undefined;
  highlight: boolean;
  excerpt: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export type PageMeta = {
  id: string;
  title: string;
};

export type Page = PageMeta & {
  contentHtml: string;
};
