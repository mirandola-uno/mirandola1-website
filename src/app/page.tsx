import { AppBar } from "@/components/app-bar";
import { RandomQuoteSection } from "@/components/landing_sections/random-quote";
import { NewsSection } from "@/components/landing_sections/news";
import { ContactsSection } from "@/components/landing_sections/contacts";
import { FooterSection } from "@/components/landing_sections/footer";
import { HeroSection } from "@/components/landing_sections/hero";
import { BrancheSection } from "@/components/landing_sections/branche";

export default function Home() {
  return (
    <div className="flex flex-col">
      <AppBar />

      <main>
        <HeroSection />

        <BrancheSection />

        <NewsSection />

        <RandomQuoteSection />

        <ContactsSection />
      </main>

      <FooterSection />
    </div>
  );
}
