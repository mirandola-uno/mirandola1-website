"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { InstagramIcon, FacebookIcon } from "./icons";
import { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { usePathname } from "next/navigation";

interface SocialItem {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
}

const MENU = [
  {
    label: "News",
    href: "#news",
  },
  {
    label: "Contatti",
    href: ROUTES.CONTACT,
  },
];

const SOCIALS: SocialItem[] = [
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
    <div className="bg-agesci-violet flex flex-row items-center p-4 gap-2 text-white">
      <Image src="/logo_agesci_white.webp" alt="Gruppo Scout Mirandola 1" width={50} height={50} />

      <Link href={ROUTES.HOME} className="text-lg md:text-2xl font-bold">
        Gruppo Scout Mirandola 1
      </Link>

      <div className="flex-1" />

      <div className="flex flex-row gap-2 items-center text-white">
        {MENU.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-active={item.href === pathname}
            className={cn(buttonVariants({ variant: "ghost" }), "hidden md:block data-[active=true]:bg-muted/20")}
          >
            {item.label}
          </Link>
        ))}
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
      </div>
    </div>
  );
};
