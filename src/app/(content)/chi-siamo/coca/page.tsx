import DefaultLayout from "@/components/default-layout";
import { ROUTES } from "@/lib/routes";
import coca from "@/lib/data/coca.json";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CoCaProfileImage } from "@/components/coca-profile-image";

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
      <div className="flex flex-col gap-4">
        <div className="text-lg">
          La Comunità Capi (abbreviata in Co.Ca.) è il gruppo di soci adulti dell&apos;associazione che si impegna alla
          gestione di un gruppo scout e all&apos;educazione dei ragazzi in un ambiente caratterizzato dalla condivisione
          dalla corresponsabilità e dalla solidarietà reciproca.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coca.map((item) => (
            <div key={item.id} className="flex gap-2 p-4 rounded-md border">
              <CoCaProfileImage id={item.id} />

              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">
                  {item.Nome} {item.Cognome}
                </h2>
                <p className="text-sm text-gray-500">{item.ruolo}</p>
                <Badge
                  className={cn(
                    item.branca === "coca" && "bg-agesci-violet",
                    item.branca === "lc" && "bg-agesci-yellow",
                    item.branca === "eg" && "bg-agesci-green",
                    item.branca === "rs" && "bg-agesci-red"
                  )}
                >
                  {item.unita}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
