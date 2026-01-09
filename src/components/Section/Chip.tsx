interface ChipProps {
  children: React.ReactNode;
}



export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span className="rounded bg-zinc-800 text-sm px-2 py-1  md:px-5 md:py-2  md:text-xl font-semibold uppercase ">
      {children}
    </span>
  );
};