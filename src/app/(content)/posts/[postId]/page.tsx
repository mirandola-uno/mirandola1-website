import DefaultLayout from "@/components/default-layout";
import { getAllContents, getContentData } from "@/lib/contents";
import { ROUTES } from "@/lib/routes";

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = getAllContents("posts");
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  const postData = await getContentData("posts", postId);

  return (
    <DefaultLayout
      title={postData.title ?? ""}
      subtitle={postData.date ?? ""}
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Posts", href: ROUTES.POSTS },
        { label: postData.title ?? "", href: ROUTES.POSTS_ID(postData.id) },
      ]}
    >
      <article
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </DefaultLayout>
  );
}
