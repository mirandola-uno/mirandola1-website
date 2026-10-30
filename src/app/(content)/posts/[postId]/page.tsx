import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DefaultLayout from "@/components/default-layout";
import { Prose } from "@/components/prose";
import { buttonVariants } from "@/components/ui/button";
import { getAllPostsMeta, getPostData } from "@/lib/contents/posts";
import { ROUTES } from "@/lib/routes";
import { format } from "date-fns";
import { it } from "date-fns/locale";

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
      subtitle={postData.date ? format(postData.date, "d MMMM yyyy", { locale: it }) : ""}
      narrow
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "News", href: ROUTES.POSTS },
        { label: postData.title ?? "", href: ROUTES.POSTS_ID(postData.id) },
      ]}
    >
      <div className="flex flex-col gap-10">
        <Prose html={postData.contentHtml} />
        <div className="border-t pt-6">
          <Link href={ROUTES.POSTS} className={buttonVariants({ variant: "outline" })}>
            <ArrowLeft /> Tutte le news
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}
