import { Motion } from "../Motion/Motion";

interface SectionTextProps {
  title: string;
  text: string;
  side: "left" | "right";
}

export const SectionText: React.FC<SectionTextProps> = ({
  title,
  text,
  side
}) => {
  const isRight = side === "right";

  return (
    <div
      className={`
        flex flex-col gap-4
        w-full lg:w-1/2
        ${isRight ? "ml-auto items-end text-right" : "items-start text-left"}
      `}
    >
      <Motion>
        <p className="text-3xl font-semibold text-justify">
          {title}
        </p>
      </Motion>

      <Motion>
        <p className="text-lg text-zinc-300 text-justify">
          {text}
        </p>
      </Motion>
    </div>
  );
};
