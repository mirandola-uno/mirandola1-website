import Link from "next/link";
import { LandingSection } from "../landing-section";
import { buttonVariants } from "../ui/button";
import { getAllPostsMeta } from "@/lib/contents/posts";
import { ROUTES } from "@/lib/routes";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const NewsSection = () => {
  const posts = getAllPostsMeta();

  return (
    <LandingSection title="News" id="news">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={ROUTES.POSTS_ID(post.id)}
              className={cn(
                "border border-md rounded-lg p-4 w-full md:w-md flex flex-col gap-2 shadow-md hover:shadow-2xl",
                post.highlight && "border-mirandola-uno-yellow border-4"
              )}
            >
              <div className="text-2xl font-bold">{post.title}</div>
              {post.date && <div className="text-sm text-gray-500">{format(post.date, "dd MMMM yyyy")}</div>}
              <div className="w-16 h-2 bg-mirandola-uno-blue rounded-md" />
              <div className="flex flex-col gap-4">
                <div
                  className="prose prose-md dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.excerpt ?? "" }}
                />
                <div className="flex justify-end">
                  <Link href={ROUTES.POSTS_ID(post.id)} className={buttonVariants({ variant: "default" })}>
                    Leggi tutto <ChevronRight />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-start">
          <Link href={ROUTES.POSTS} className={buttonVariants({ variant: "outline" })}>
            Tutte le news <ChevronRight />
          </Link>
        </div>
      </div>
    </LandingSection>
  );
};
