import { AppBar } from "@/components/app-bar";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <AppBar />
      {children}
    </div>
  );
}
