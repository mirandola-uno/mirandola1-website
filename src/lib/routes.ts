export const ROUTES = {
  HOME: "/",
  WORK_IN_PROGRESS: "/work-in-progress",
  CONTACT: "/contact",

  CHI_SIAMO: {
    COCA: "/chi-siamo/coca",
    PEG: "/pages/peg",
  },

  POSTS: "/posts",
  POSTS_ID: (postId: string) => `/posts/${postId}`,

  PAGES_ID: (pageId: string) => `/pages/${pageId}`,
};
