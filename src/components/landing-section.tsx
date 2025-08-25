export const LandingSection = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 p-2 md:p-4" id={id}>
      <div className="text-3xl font-bold">{title}</div>
      <div className="w-32 h-2 bg-agesci-yellow rounded-md" />
      <div className="py-2">{children}</div>
    </div>
  );
};
