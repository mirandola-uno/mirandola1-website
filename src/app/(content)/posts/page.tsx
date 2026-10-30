import DefaultLayout from "@/components/default-layout";
import { PostCard } from "@/components/post-card";
import { getAllPostsMeta } from "@/lib/contents/posts";
import { ROUTES } from "@/lib/routes";

export default function PostsPage() {
  const posts = getAllPostsMeta();

  return (
    <DefaultLayout
      title="News"
      subtitle="Avvisi, iscrizioni e racconti dalla vita del gruppo."
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "News", href: ROUTES.POSTS },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </DefaultLayout>
  );
}
