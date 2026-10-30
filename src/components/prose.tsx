import { cn } from "@/lib/utils";

/** Renders HTML generated from the markdown contents with the site typography */
export const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <article
      className={cn(
        "prose prose-lg max-w-none dark:prose-invert",
        "prose-headings:font-serif prose-headings:tracking-tight",
        "prose-a:text-primary prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:decoration-2",
        "prose-img:rounded-xl prose-li:marker:text-primary",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
