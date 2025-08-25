import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export const FooterSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-4 items-center bg-agesci-violet text-white p-2 md:p-8 ">
      <div className="flex flex-col gap-2 text-sm items-center md:items-start">
        <Image
          src="/logo_agesci_white.webp"
          className="w-10 h-10"
          alt="Gruppo Scout Mirandola 1"
          width={50}
          height={50}
        />
        <div className="font-bold">AGESCI - Gruppo Scout Mirandola 1</div>
        <div>C.F. / P.IVA 91027610368</div>
        <div>Via Posta, 55 - 41037 Mirandola (MO)</div>
        <div>Sede Legale: Via Cavour, 2 - 41037 Mirandola (MO)</div>
        <Link className="text-muted-foreground" href={ROUTES.PAGES_ID("privacy-policy")}>
          Privacy Policy
        </Link>
        <div className="text-muted-foreground">© {new Date().getFullYear()} - Tutti i diritti riservati</div>
      </div>

      <div className="text-3xl font-delius text-center md:text-right">
        Del nostro meglio, <br /> per essere pronti a servire.
      </div>
    </div>
  );
};
