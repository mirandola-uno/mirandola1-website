import Link from "next/link";
import { LandingSection } from "../landing-section";
import { buttonVariants } from "../ui/button";
import { getAllPostsMeta } from "@/lib/contents/posts";
import { ROUTES } from "@/lib/routes";
import { ArrowRight } from "lucide-react";
import { PostCard } from "../post-card";

export const NewsSection = () => {
  const posts = getAllPostsMeta().slice(0, 3);

  return (
    <LandingSection
      eyebrow="Notizie"
      title="Ultime dal gruppo"
      id="news"
      className="bg-muted/40 border-y"
      action={
        <Link href={ROUTES.POSTS} className={buttonVariants({ variant: "outline" })}>
          Tutte le news <ArrowRight />
        </Link>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </LandingSection>
  );
};
