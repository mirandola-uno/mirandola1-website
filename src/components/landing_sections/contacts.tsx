import { LandingSection } from "../landing-section";
import GoogleMapContainer from "../google-map-container";
import { Mail, MapPin, Landmark } from "lucide-react";
import { SOCIALS } from "@/lib/socials";

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "mirandolauno@gmail.com",
    href: "mailto:mirandolauno@gmail.com",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Via Posta, 55 - 41037 Mirandola (MO)",
    href: "https://maps.app.goo.gl/kGgiRVg5FaCkNPKN9",
  },
  {
    icon: Landmark,
    label: "Sede legale",
    value: "Via Cavour, 2 - 41037 Mirandola (MO)",
  },
];

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {CONTACTS.map((contact) => {
        const content = (
          <>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
              <contact.icon className="size-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {contact.label}
              </span>
              <span className="font-medium">{contact.value}</span>
            </span>
          </>
        );
        return contact.href ? (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-primary/40"
          >
            {content}
          </a>
        ) : (
          <div key={contact.label} className="flex items-center gap-4 rounded-xl border bg-card p-4">
            {content}
          </div>
        );
      })}
      <div className="flex gap-2 pt-2">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex size-11 items-center justify-center rounded-lg border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};

export const ContactsSection = () => {
  return (
    <LandingSection eyebrow="Dove trovarci" title="Contatti" id="contacts">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <ContactInfo />
        <div className="overflow-hidden rounded-xl border shadow-sm">
          <GoogleMapContainer address="Via Posta, 55 - 41037 Mirandola (MO)" />
        </div>
      </div>
    </LandingSection>
  );
};
