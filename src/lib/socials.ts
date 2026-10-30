import { ComponentType } from "react";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export const SOCIALS: {
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
