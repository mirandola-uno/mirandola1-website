import { cn } from "@/lib/utils";

export const LandingSection = ({
  title,
  eyebrow,
  id,
  action,
  className,
  children,
}: {
  title: string;
  eyebrow?: string;
  id: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={cn("py-16 md:py-24 scroll-mt-24", className)} id={id}>
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            {eyebrow && (
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-agesci-yellow" />
                {eyebrow}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
          </div>
          {action}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};
