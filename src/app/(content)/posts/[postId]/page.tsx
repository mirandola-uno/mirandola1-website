import DefaultLayout from "@/components/default-layout";
import { getAllPostsMeta, getPostData } from "@/lib/contents/posts";
import { ROUTES } from "@/lib/routes";
import { format } from "date-fns";

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  const postData = await getPostData(postId);

  return (
    <DefaultLayout
      title={postData.title ?? ""}
      subtitle={postData.date ? format(postData.date, "dd MMMM yyyy") : ""}
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
