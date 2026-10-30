import Link from "next/link";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { ArrowRight, CalendarDays, Star } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { PostMeta } from "@/lib/types";
import { cn } from "@/lib/utils";

export const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <Link
      href={ROUTES.POSTS_ID(post.id)}
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/30",
        post.highlight && "ring-2 ring-agesci-yellow border-transparent",
      )}
    >
      <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
        {post.date && (
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            {format(post.date, "d MMMM yyyy", { locale: it })}
          </span>
        )}
        {post.highlight && (
          <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-agesci-yellow px-2.5 py-0.5 text-xs font-semibold text-agesci-violet-deep">
            <Star className="size-3 fill-current" /> In evidenza
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
      {post.excerpt && <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>}
      <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary">
        Leggi tutto <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
};
