"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { InstagramIcon, FacebookIcon } from "./icons";
import { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  FileBadge,
  Footprints,
  Leaf,
  Link as LinkIcon,
  MoreVertical,
  Newspaper,
  Users,
} from "lucide-react";
import { Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
        icon: FileBadge,
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
    ],
  },
  {
    label: "Materiale e Link",
    icon: LinkIcon,
    values: [
      {
        label: "Area Download",
        icon: FileBadge,
        href: ROUTES.PAGES_ID("area-download"),
      },
    ],
  },
];

const SOCIALS: {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
}[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/agesci.mirandola1/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mirandolauno",
    icon: FacebookIcon,
  },
];

export const AppBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className="bg-agesci-violet flex flex-row items-center p-4 gap-2 text-white">
        <Image
          src="/logo_agesci_white.webp"
          className="size-10"
          alt="Gruppo Scout Mirandola 1"
          width={50}
          height={50}
        />

        <Link href={ROUTES.HOME} className="text-sm md:text-2xl font-bold">
          Gruppo Scout Mirandola 1
        </Link>

        <div className="flex-1" />

        <div className="flex flex-row gap-2 items-center">
          {/* DESKTOP MENU */}
          <div className="hidden md:flex flex-row gap-2 items-center">
            {MENU.map((item) =>
              item.values ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      {item.icon && <item.icon className="size-4" />} {item.label} <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.values.map((value) => (
                      <DropdownMenuItem key={value.label} className="cursor-pointer">
                        <Link href={value.href ?? ""} className="flex flex-row gap-2 items-center">
                          {value.icon && <value.icon className="size-4" />} {value.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? ""}
                  data-active={item.href === pathname}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "data-[active=true]:bg-muted/20 flex flex-row gap-2 items-center"
                  )}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </Link>
              )
            )}
          </div>

          {SOCIALS.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className={buttonVariants({ variant: "ghost" })}
              >
                <IconComponent size={20} />
              </Link>
            );
          })}

          {/* MOBILE MENU */}
          <div className="block md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" size="icon">
                  <MoreVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-56" align="start">
                <DropdownMenuLabel>MENU</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {MENU.map((item, i) =>
                  item.values ? (
                    <>
                      <DropdownMenuLabel className="flex flex-row gap-2 items-center">
                        {item.icon && <item.icon className="size-4" />}
                        {item.label}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {item.values.map((value) => (
                        <DropdownMenuItem
                          key={value.label}
                          data-active={value.href === pathname}
                          className="data-[active=true]:bg-muted/80"
                        >
                          <Link href={value.href ?? ""} className="flex flex-row gap-2 items-center">
                            {value.icon && <value.icon className="size-4" />} {value.label} <ChevronRight />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      {i !== MENU.length - 1 && <DropdownMenuSeparator />}
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem
                        key={item.label}
                        data-active={item.href === pathname}
                        className="data-[active=true]:bg-muted/80"
                      >
                        <Link href={item.href ?? ""} className="flex flex-row gap-2 items-center">
                          {item.icon && <item.icon className="size-4" />} {item.label} <ChevronRight />
                        </Link>
                      </DropdownMenuItem>
                      {i !== MENU.length - 1 && <DropdownMenuSeparator />}
                    </>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-mirandola-uno-blue" />
      <div className="h-1 w-full bg-mirandola-uno-yellow" />
    </div>
  );
};
