import DefaultLayout from "@/components/default-layout";
import { ROUTES } from "@/lib/routes";
import coca from "@/lib/data/coca.json";
import { cn } from "@/lib/utils";
import { CoCaProfileImage } from "@/components/coca-profile-image";

const BRANCHE = [
  { id: "coca", label: "Capi Gruppo e Comunità Capi", accent: "bg-agesci-violet", text: "text-white" },
  { id: "lc", label: "Branca Lupetti e Coccinelle", accent: "bg-agesci-yellow", text: "text-agesci-violet-deep" },
  { id: "eg", label: "Branca Esploratori e Guide", accent: "bg-agesci-green", text: "text-white" },
  { id: "rs", label: "Branca Rover e Scolte", accent: "bg-agesci-red", text: "text-white" },
];

export default function CoCaPage() {
  return (
    <DefaultLayout
      title={"Comunità Capi"}
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Chi Siamo", href: "#" },
        { label: "Comunità Capi", href: ROUTES.CHI_SIAMO.COCA },
      ]}
    >
      <div className="flex flex-col gap-14">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          La Comunità Capi (abbreviata in Co.Ca.) è il gruppo di soci adulti dell&apos;associazione che si impegna alla
          gestione di un gruppo scout e all&apos;educazione dei ragazzi in un ambiente caratterizzato dalla condivisione
          dalla corresponsabilità e dalla solidarietà reciproca.
        </p>

        {BRANCHE.map((branca) => {
          const members = coca.filter((item) => item.branca === branca.id);
          if (!members.length) return null;
          return (
            <section key={branca.id} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className={cn("h-8 w-1.5 rounded-full", branca.accent)} />
                <h2 className="text-2xl font-semibold">{branca.label}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {members.map((item) => (
                  <div key={item.id} className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
                    <CoCaProfileImage id={item.id} />
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <h3 className="font-sans text-base font-semibold leading-tight">
                        {item.Nome} {item.Cognome}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.ruolo}</p>
                      <span
                        className={cn(
                          "mt-auto w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          branca.accent,
                          branca.text,
                        )}
                      >
                        {item.unita}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </DefaultLayout>
  );
}
