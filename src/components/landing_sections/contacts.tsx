import { LandingSection } from "../landing-section";
import GoogleMapContainer from "../google-map-container";
import Link from "next/link";
import { Mail, Map } from "lucide-react";

export const ContactsSection = () => {
  return (
    <LandingSection title="Contatti" id="contacts">
      <div className="flex flex-col gap-2">
        {/* mail */}
        <div className="flex gap-2 items-center">
          <Mail />
          <div className="text-lg">mirandolauno@gmail.com</div>
        </div>

        {/* address */}
        <div className="flex gap-2 items-center">
          <Map />
          <Link
            href="https://maps.app.goo.gl/kGgiRVg5FaCkNPKN9"
            target="_blank"
            className="text-lg underline flex gap-2 items-center"
          >
            Via Posta, 55 - 41037 Mirandola (MO)
          </Link>
        </div>

        {/* map */}
        <div className="rounded-lg overflow-hidden w-full md:w-1/2">
          <GoogleMapContainer address="Via Posta, 55 - 41037 Mirandola (MO)" />
        </div>
      </div>
    </LandingSection>
  );
};
