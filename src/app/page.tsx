import { AppBar } from "@/components/app-bar";
import { RandomQuoteSection } from "@/components/landing_sections/random-quote";
import { NewsSection } from "@/components/landing_sections/news";
import { ContactsSection } from "@/components/landing_sections/contacts";
import { FooterSection } from "@/components/landing_sections/footer";
import { HeroSection } from "@/components/landing_sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppBar />

      {/* HERO */}
      <HeroSection />

      <div className="flex flex-col p-4 md:p-8">
        <RandomQuoteSection />
        <NewsSection />
        <ContactsSection />
      </div>

      <FooterSection />
    </div>
  );
}
