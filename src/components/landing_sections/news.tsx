import Link from "next/link";
import { LandingSection } from "../landing-section";
import { NewsCard } from "../news-card";
import { buttonVariants } from "../ui/button";

export const NewsSection = () => {
  return (
    <LandingSection title="News" id="news">
      <div className="flex flex-col md:flex-row gap-4">
        {/* iscrizioni */}
        <NewsCard title="Iscrizioni">
          <div className="flex flex-col gap-2">
            <div className="">
              Le iscrizioni per il nuovo anno scout AGESCI si aprono il{" "}
              <span className="font-bold">1° settembre alle ore 9.00</span>. Se volete iscrivervi o iscrivere i vostri
              figli al <span className="font-bold">Gruppo Scout AGESCI Mirandola 1</span>, all&apos;apertura delle
              iscrizioni, dovete compilare il modulo online per la RICHIESTA ISCRIZIONE entro il 15 settembre;
              <br />
              <br />
              Verrete contattati dai capi dopo tale data. Il Modulo è unico per entrambi i gruppi scout di Mirandola,
              Mirandola 1 e Mirandola 2, in fase di compilazione è possibile inserire una preferenza.
              <br />
              <br />
              <span className="font-bold">
                Per iscriversi, è necessario compilare il modulo di iscrizione che trovate a questo link
              </span>
            </div>
            <Link href="https://forms.gle/yrEkT8KrzJHrt9C8A" target="_blank" className={buttonVariants()}>
              ISCRIZIONI 2025-2026
            </Link>
          </div>
        </NewsCard>

        {/* iscrizioni */}
        <NewsCard title="Mirandola al Cento">
          <div className="flex flex-col gap-2">
            <div className="">
              Cent&apos;anni fa, a Mirandola, venivano pronunciate le prime Promesse nella Diocesi di Carpi. Per
              celebrare questo importante anniversario, il nostro gruppo, insieme al gruppo Mirandola 2 ha realizzato un
              podcast per ricordare e raccontare la storia di questi (primi) 100 anni di vita scout. &quot;Mirandola Al
              Cento&quot; esce ogni giovedì a partire dal 1° maggio 2025 e sarà disponibile su Spotify.
            </div>
            <Link
              href="https://open.spotify.com/show/6ntsD9KzQZbKxtClCW2hha?si=50fe155625194aed"
              target="_blank"
              className={buttonVariants()}
            >
              Mirandola al Cento
            </Link>
          </div>
        </NewsCard>
      </div>
    </LandingSection>
  );
};
