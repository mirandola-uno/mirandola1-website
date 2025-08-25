export const NewsCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="border border-md rounded-lg p-4 w-full md:w-md">
      <div className="text-3xl font-bold">{title}</div>
      <div className="w-16 h-2 bg-agesci-yellow rounded-md" />
      {children}
    </div>
  );
};
