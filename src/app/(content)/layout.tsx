import { AppBar } from "@/components/app-bar";
import { FooterSection } from "@/components/landing_sections/footer";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar />
      <div className="flex-1">{children}</div>
      <FooterSection />
    </div>
  );
}
