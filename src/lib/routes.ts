export const ROUTES = {
  HOME: "/",
  WORK_IN_PROGRESS: "/work-in-progress",
  CONTACT: "/contact",

  POSTS: "/posts",
  POSTS_ID: (postId: string) => `/posts/${postId}`,

  PAGES_ID: (pageId: string) => `/pages/${pageId}`,
};
