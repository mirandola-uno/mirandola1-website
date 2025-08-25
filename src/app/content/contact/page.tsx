import DefaultLayout from "@/components/default-layout";
import { ROUTES } from "@/lib/routes";
import GoogleMapContainer from "@/components/google-map-container";

export default function ContactPage() {
  return (
    <DefaultLayout
      title="Contatti"
      breadcrumb={[
        { label: "Home", href: ROUTES.HOME },
        { label: "Contatti", href: ROUTES.CONTACT },
      ]}
    >
      <div className="flex flex-col gap-4">
        <div className="text-lg">
          <div>Email: mirandolauno@gmail.com</div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <GoogleMapContainer address="Via Posta, 55 - 41037 Mirandola (MO)" />
        </div>
      </div>
    </DefaultLayout>
  );
}
