"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentType, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { SOCIALS } from "@/lib/socials";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  FileBadge,
  FileText,
  Footprints,
  Leaf,
  Link as LinkIcon,
  Mail,
  Menu,
  Mountain,
  Newspaper,
  ScrollText,
  Users,
  X,
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { buttonVariants } from "./ui/button";

interface MenuItem {
  label: string;
  href?: string;
  icon?: ComponentType<{ className?: string; size?: number }>;
  values?: MenuItem[];
}

const MENU: MenuItem[] = [
  {
    label: "News",
    icon: Newspaper,
    href: ROUTES.POSTS,
  },
  {
    label: "Chi Siamo",
    icon: Users,
    values: [
      {
        label: "Comunità Capi",
        href: ROUTES.CHI_SIAMO.COCA,
        icon: Users,
      },
      {
        label: "Progetto Educativo",
        href: ROUTES.CHI_SIAMO.PEG,
        icon: FileBadge,
      },
      {
        label: "Patto Associativo",
        href: ROUTES.PAGES_ID("patto-associativo"),
        icon: ScrollText,
      },
      {
        label: "Contatti",
        icon: Mail,
        href: ROUTES.CONTACT,
      },
    ],
  },
  {
    label: "Lupetti e Coccinelle",
    icon: Leaf,
    values: [
      {
        label: "Piccole Orme",
        href: ROUTES.PAGES_ID("piccole-orme"),
        icon: Footprints,
      },
      {
        label: "Vacanze di Branco Cerchio",
        href: ROUTES.PAGES_ID("campo-lc"),
        icon: Mountain,
      },
    ],
  },
  {
    label: "Materiale e Link",
    icon: LinkIcon,
    values: [
      {
        label: "Area Download",
        icon: FileText,
        href: ROUTES.PAGES_ID("area-download"),
      },
    ],
  },
];

const isActive = (item: MenuItem, pathname: string): boolean =>
  item.href === pathname || !!item.values?.some((value) => isActive(value, pathname));

const navItemClass =
  "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground data-[active=true]:text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const AppBar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // close the mobile menu after navigating
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40">
      {/* UTILITY BAR */}
      <div className="hidden md:block bg-agesci-violet-deep text-white/80 text-xs">
        <div className="container-page flex h-9 items-center justify-between">
          <span>Associazione Guide e Scouts Cattolici Italiani</span>
          <div className="flex items-center gap-4">
            <a href="mailto:mirandolauno@gmail.com" className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" /> mirandolauno@gmail.com
            </a>
            <span className="h-3 w-px bg-white/20" />
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="hover:text-white"
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/85 border-b">
        <div className="container-page flex h-16 md:h-20 items-center gap-4">
          <Link href={ROUTES.HOME} className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo_agesci.png"
              className="size-10 md:size-12"
              alt="Logo AGESCI"
              width={96}
              height={96}
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="text-[0.65rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                AGESCI · Gruppo Scout
              </span>
              <span className="font-serif text-xl md:text-2xl font-semibold text-agesci-violet dark:text-primary">
                Mirandola 1
              </span>
            </span>
          </Link>

          <div className="flex-1" />

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principale">
            {MENU.map((item) =>
              item.values ? (
                <DropdownMenu key={item.label} modal={false}>
                  <DropdownMenuTrigger className={navItemClass} data-active={isActive(item, pathname)}>
                    {item.label} <ChevronDown className="size-4 opacity-60" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-60 p-1.5">
                    {item.values.map((value) => (
                      <DropdownMenuItem key={value.label} asChild className="cursor-pointer gap-3 py-2">
                        <Link href={value.href ?? ""}>
                          {value.icon && <value.icon className="size-4 text-primary" />}
                          {value.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? ""}
                  data-active={isActive(item, pathname)}
                  className={navItemClass}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href={ROUTES.CONTACT} className={cn(buttonVariants(), "ml-2")}>
              <Mail /> Contattaci
            </Link>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-md hover:bg-accent"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav
            className="lg:hidden border-t max-h-[calc(100dvh-4rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2"
            aria-label="Menu principale"
          >
            <div className="container-page flex flex-col py-4 gap-4">
              {MENU.map((item) =>
                item.values ? (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    {item.values.map((value) => (
                      <Link
                        key={value.label}
                        href={value.href ?? ""}
                        data-active={value.href === pathname}
                        className={cn(navItemClass, "text-base data-[active=true]:bg-accent")}
                      >
                        {value.icon && <value.icon className="size-4 text-primary" />}
                        {value.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? ""}
                    data-active={item.href === pathname}
                    className={cn(navItemClass, "text-base data-[active=true]:bg-accent")}
                  >
                    {item.icon && <item.icon className="size-4 text-primary" />}
                    {item.label}
                  </Link>
                ),
              )}
              <div className="flex items-center gap-2 border-t pt-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    <social.icon size={16} /> {social.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
      <div className="agesci-stripe h-1" />
    </header>
  );
};
