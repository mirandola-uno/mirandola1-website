export type ContentMeta = {
  id: string;
  title: string;
  date: Date | undefined;
  highlight: boolean;
  excerpt: string;
};

export type Content = ContentMeta & {
  contentHtml: string;
};
