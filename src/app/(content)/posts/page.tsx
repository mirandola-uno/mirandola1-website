import DefaultLayout from "@/components/default-layout";
import { getAllContents } from "@/lib/contents";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PostsPage() {
  const posts = getAllContents("posts");

  return (
    <DefaultLayout
      title="Posts"
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Posts", href: ROUTES.POSTS },
      ]}
    >
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            href={ROUTES.POSTS_ID(post.id)}
            key={post.id}
            className={cn("border rounded-lg p-4", post.highlight && "border-mirandola-uno-yellow border-8")}
          >
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-1 flex-col gap-2">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <small className="text-sm text-gray-500">{post.date}</small>
                <div className="text-sm text-gray-500">{post.excerpt}</div>
              </div>
              <ChevronRight />
            </div>
          </Link>
        ))}
      </div>
    </DefaultLayout>
  );
}
