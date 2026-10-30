import Image from "next/image";

export default function WorkInProgressPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-agesci-violet-deep p-6 text-white">
      <div className="agesci-stripe absolute inset-x-0 top-0 h-1.5" />
      <div className="flex max-w-xl flex-col items-center gap-6 text-center">
        <Image src="/logo_agesci_white.webp" alt="Logo AGESCI" width={96} height={96} />
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">AGESCI · Gruppo Scout</div>
        <h1 className="text-4xl md:text-6xl font-semibold">
          Mirandola <span className="text-agesci-yellow">1</span>
        </h1>
        <p className="text-lg text-white/80">Il sito web del gruppo è in costruzione. Torna a trovarci presto!</p>
      </div>
    </div>
  );
}
