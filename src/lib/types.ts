export type ContentMeta = {
  id: string;
  title: string;
  date: string;
  highlight: boolean;
  excerpt: string;
};

export type Content = ContentMeta & {
  contentHtml: string;
};
