import { LandingSection } from "../landing-section";
import { cn } from "@/lib/utils";

const BRANCHE = [
  {
    id: "lc",
    name: "Lupetti e Coccinelle",
    age: "8 – 11 anni",
    description:
      "Nel Branco e nel Cerchio bambine e bambini crescono attraverso il gioco, l'ambiente fantastico e la vita di comunità.",
    units: ["Lupetti", "Coccinelle"],
    accent: "bg-agesci-yellow",
    tint: "bg-agesci-yellow/10",
  },
  {
    id: "eg",
    name: "Esploratori e Guide",
    age: "11 – 16 anni",
    description:
      "Nei Reparti ragazze e ragazzi vivono l'avventura in Squadriglia, imparando a fare da sé e a prendersi responsabilità.",
    units: ["Reparto Tramontana", "Reparto Aquile Randagie"],
    accent: "bg-agesci-green",
    tint: "bg-agesci-green/10",
  },
  {
    id: "rs",
    name: "Rover e Scolte",
    age: "16 – 21 anni",
    description:
      "In Noviziato e nel Clan si cammina insieme sulla Strada, scoprendo il servizio e la scelta di cittadinanza attiva.",
    units: ["Noviziato", "Clan Fuoco"],
    accent: "bg-agesci-red",
    tint: "bg-agesci-red/10",
  },
];

export const BrancheSection = () => {
  return (
    <LandingSection eyebrow="Le nostre unità" title="Un percorso educativo dagli 8 ai 21 anni" id="branche">
      <div className="grid gap-6 md:grid-cols-3">
        {BRANCHE.map((branca) => (
          <div
            key={branca.id}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", branca.accent)} />
            <div className="flex items-center justify-between gap-2">
              <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", branca.tint)}>{branca.age}</span>
              <span className={cn("size-3 rounded-full", branca.accent)} />
            </div>
            <h3 className="text-2xl font-semibold">{branca.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{branca.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {branca.units.map((unit) => (
                <span key={unit} className="rounded-md border bg-muted/50 px-2.5 py-1 text-sm font-medium">
                  {unit}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};
