import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[50vh] text-agesci-yellow">
      <Image
        src="/images/hero_image.png"
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover"
        width={800}
        height={800}
      />
      <div className="absolute inset-0 bg-agesci-violet opacity-80" />
      <div className="relative z-10 flex flex-col md:items-start items-center">
        <div className="text-center text-3xl md:text-5xl font-bold">AGESCI - Gruppo Scout Mirandola 1</div>
        <div className="text-center text-xl md:text-3xl">Ottant&apos;anni di giochi, avventura e strade.</div>
      </div>
    </div>
  );
};
