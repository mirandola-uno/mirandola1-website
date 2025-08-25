import Image from "next/image";

export default function WorkInProgressPage() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-agesci-violet">
      <div className="text-5xl p-4 flex flex-col gap-2">
        <Image src="/logo_agesci_white.webp" alt="Gruppo Scout Mirandola 1" width={100} height={100} />
        <div className="font-bold text-white">Il Sito web del gruppo Scout</div>
        <div className="font-bold text-agesci-yellow"> Mirandola 1</div>
        <div className="font-bold text-white">è in Costruzione</div>
      </div>
    </div>
  );
}
