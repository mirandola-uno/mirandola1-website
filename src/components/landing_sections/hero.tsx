import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[50vh]">
      <Image
        src="/images/hero_image.png"
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover"
        width={800}
        height={800}
      />
      <div className="absolute inset-0 bg-agesci-violet opacity-80" />
      <div className="relative z-10 flex flex-col md:items-start items-center p-4 text-white">
        <div className="text-center text-3xl md:text-5xl font-bold">AGESCI Gruppo Scout Mirandola 1</div>
        <div className="text-center text-lg md:text-3xl font-delius">
          Ottant&apos;anni di <span className="text-agesci-yellow font-bold">Giochi</span>,{" "}
          <span className="text-agesci-green font-bold">Avventure</span> e{" "}
          <span className="text-agesci-red font-bold">Strade</span>.
        </div>
      </div>
    </div>
  );
};
