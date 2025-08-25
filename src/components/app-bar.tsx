import { DarkModeToggle } from "./dark-mode-toggle";

export const AppBar = () => {
  return (
    <div className="bg-gray-700 flex flex-row items-center p-2 gap-2">
      <div className="text-white text-2xl font-bold">Gruppo Scout Mirandola 1</div>

      <div className="flex-1" />

      <DarkModeToggle />
    </div>
  );
};
