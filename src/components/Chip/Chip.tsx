interface ChipProps {
  children: React.ReactNode;
}



export const Chip: React.FC<ChipProps> = ({ children }) => {
  return (
    <span className="rounded bg-zinc-900 px-5 py-2 text-xl font-semibold text-white uppercase ">
      {children}
    </span>
  );
};