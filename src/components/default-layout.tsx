import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DefaultLayout({
  children,
  title,
  subtitle,
  centeredTitle,
  breadcrumb,
  narrow,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centeredTitle?: boolean;
  breadcrumb?: { label: string; href: string }[];
  /** constrain the content to a readable width (long-form text) */
  narrow?: boolean;
}) {
  return (
    <main className="flex flex-col">
      {/* PAGE HEADER */}
      <div className="relative overflow-hidden border-b bg-agesci-violet-soft">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-agesci-violet/5" />
        <div className="pointer-events-none absolute right-32 -bottom-32 size-64 rounded-full bg-agesci-yellow/10" />
        <div
          className={cn(
            "container-page relative flex flex-col gap-4 py-10 md:py-16",
            centeredTitle && "items-center text-center",
          )}
        >
          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                {breadcrumb.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    {idx > 0 && <ChevronRight className="size-3.5 opacity-60" />}
                    {idx === breadcrumb.length - 1 || item.href === "#" ? (
                      <span className={cn(idx === breadcrumb.length - 1 && "text-foreground font-medium")}>
                        {item.label}
                      </span>
                    ) : (
                      <Link href={item.href} className="hover:text-primary">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {title && (
            <h1 className="max-w-4xl text-3xl md:text-5xl font-semibold text-agesci-violet dark:text-foreground">
              {title}
            </h1>
          )}
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          <div className="h-1 w-16 rounded-full bg-agesci-yellow" />
        </div>
      </div>

      <div className={cn("container-page py-10 md:py-16", narrow && "max-w-4xl")}>{children}</div>
    </main>
  );
}
