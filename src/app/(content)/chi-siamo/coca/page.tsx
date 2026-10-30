import DefaultLayout from "@/components/default-layout";
import { ROUTES } from "@/lib/routes";
import { getCocaMembers } from "@/lib/coca";
import { CocaDirectory } from "@/components/coca-directory";

export default function CoCaPage() {
  const members = getCocaMembers();

  return (
    <DefaultLayout
      title={"Comunità Capi"}
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Chi Siamo", href: "#" },
        { label: "Comunità Capi", href: ROUTES.CHI_SIAMO.COCA },
      ]}
    >
      <div className="flex flex-col gap-10">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          La Comunità Capi (abbreviata in Co.Ca.) è il gruppo di soci adulti dell&apos;associazione che si impegna alla
          gestione di un gruppo scout e all&apos;educazione dei ragazzi in un ambiente caratterizzato dalla condivisione
          dalla corresponsabilità e dalla solidarietà reciproca.
        </p>

        <CocaDirectory members={members} />
      </div>
    </DefaultLayout>
  );
}
