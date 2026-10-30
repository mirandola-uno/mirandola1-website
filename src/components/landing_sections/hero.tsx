import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const KEYWORDS = [
  { label: "Giochi", color: "decoration-agesci-yellow" },
  { label: "Avventure", color: "decoration-agesci-green" },
  { label: "Strade", color: "decoration-agesci-red" },
];

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-agesci-violet-deep text-white">
      <Image
        src="/images/hero_image.png"
        alt="Il Gruppo Scout Mirandola 1"
        className="absolute inset-0 -z-10 size-full object-cover"
        width={1600}
        height={731}
        priority
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-agesci-violet-deep via-agesci-violet/90 to-agesci-violet/50" />

      <div className="container-page flex min-h-[70vh] md:min-h-[78vh] flex-col justify-center gap-8 py-20">
        <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05]">
          Ottant&apos;anni di{" "}
          {KEYWORDS.map((keyword, i) => (
            <span key={keyword.label}>
              <span className={cn("underline decoration-[6px] underline-offset-[10px]", keyword.color)}>
                {keyword.label}
              </span>
              {i === 0 ? ", " : i === 1 ? " e " : "."}
            </span>
          ))}
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-white/85">
          Educhiamo ragazze e ragazzi di Mirandola attraverso il gioco, la vita all&apos;aperto e il servizio,
          secondo il metodo scout.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href={ROUTES.CHI_SIAMO.COCA}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-agesci-yellow text-agesci-violet-deep hover:bg-agesci-yellow/90 font-semibold",
            )}
          >
            Chi siamo <ArrowRight />
          </Link>
          <Link
            href={ROUTES.POSTS}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/40",
            )}
          >
            Ultime notizie
          </Link>
        </div>
      </div>
    </section>
  );
};
