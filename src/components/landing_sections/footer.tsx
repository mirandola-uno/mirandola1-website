import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { CreditsDialog } from "../credits-dialog";

const LINKS = [
  {
    title: "Il gruppo",
    items: [
      { label: "News", href: ROUTES.POSTS },
      { label: "Comunità Capi", href: ROUTES.CHI_SIAMO.COCA },
      { label: "Progetto Educativo", href: ROUTES.CHI_SIAMO.PEG },
      { label: "Contatti", href: ROUTES.CONTACT },
    ],
  },
  {
    title: "Risorse",
    items: [
      { label: "Patto Associativo", href: ROUTES.PAGES_ID("patto-associativo") },
      { label: "Area Download", href: ROUTES.PAGES_ID("area-download") },
      { label: "AGESCI nazionale", href: "https://www.agesci.it" },
    ],
  },
];

export const FooterSection = () => {
  return (
    <footer className="bg-agesci-violet-deep text-white/80">
      <div className="flex h-1.5">
        <div className="flex-1 bg-mirandola-uno-blue" />
        <div className="flex-1 bg-mirandola-uno-yellow" />
      </div>

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo_agesci_white.webp" className="size-12" alt="Logo AGESCI" width={50} height={50} />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">AGESCI</span>
              <span className="font-serif text-xl font-semibold text-white">Gruppo Scout Mirandola 1</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span>Via Posta, 55 - 41037 Mirandola (MO)</span>
            <span>Sede Legale: Via Cavour, 2 - 41037 Mirandola (MO)</span>
            <span>C.F. / P.IVA 91027610368</span>
          </div>
        </div>

        {LINKS.map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-agesci-yellow">{group.title}</div>
            <ul className="flex flex-col gap-2 text-sm">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="font-serif text-2xl md:text-3xl italic leading-snug text-white lg:text-right">
          Del nostro meglio, <br /> per essere pronti a servire.
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-2 py-5 text-xs text-white/60">
          <div>© {new Date().getFullYear()} AGESCI Gruppo Scout Mirandola 1 · Tutti i diritti riservati</div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-white" href={ROUTES.PAGES_ID("privacy-policy")}>
              Privacy Policy
            </Link>
            <CreditsDialog />
          </div>
        </div>
      </div>
    </footer>
  );
};
