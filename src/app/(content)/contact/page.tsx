import DefaultLayout from "@/components/default-layout";
import { ROUTES } from "@/lib/routes";
import GoogleMapContainer from "@/components/google-map-container";
import { ContactInfo } from "@/components/landing_sections/contacts";

export default function ContactPage() {
  return (
    <DefaultLayout
      title="Contatti"
      subtitle="Scrivici per informazioni su iscrizioni, attività e unità."
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Contatti", href: ROUTES.CONTACT },
      ]}
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <ContactInfo />
        <div className="overflow-hidden rounded-xl border shadow-sm">
          <GoogleMapContainer address="Via Posta, 55 - 41037 Mirandola (MO)" />
        </div>
      </div>
    </DefaultLayout>
  );
}
