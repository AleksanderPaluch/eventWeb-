import { Chip } from "./Chip";
import { Motion } from "../Motion/Motion";
import { SectionHeader } from "./SectionHeader";

interface SectionProps {
  id: string;
  side: "left" | "right";
  title: string;
  header: string;
  text: string;
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const Section: React.FC<SectionProps> = ({
  id,
  side,
  title,
  header,
  text,
  chipsTitle,
  chips,
  secondaryChipsTitle,
  secondaryChips,
}) => {
  return (
    <section
      id={id}
      className="pt-16 pb-42 mx-auto max-w-6xl px-4 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title={header} side={side} />

      {/* TEXT */}
      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2  ">
        <Motion>
          <p className="text-3xl font-semibold">{title}</p>
        </Motion>
        <Motion>
          <p className="text-xl  lg:w-3/5">{text}</p>
        </Motion>
      </div>

      {/* PRIMARY CHIPS */}

      <div   className={secondaryChipsTitle ? " my-32 grid md:grid-cols-2 gap-8" : "my-32"}>
        {chipsTitle && chips && (
          <div className="">
            <Motion>
              <p className="text-3xl mb-6 font-bold uppercase">{chipsTitle}</p>
            </Motion>

            <Motion>
              <div className="mt-4 flex flex-wrap gap-2 ">
                {chips.map((chip, index) => (
                  <Chip key={index}>{chip}</Chip>
                ))}
              </div>
            </Motion>
          </div>
        )}

        {/* SECONDARY CHIPS */}
        {secondaryChipsTitle && secondaryChips && (
          <div className="">
            <Motion>
              <p className="text-3xl mb-6 font-bold">{secondaryChipsTitle}</p>
            </Motion>
            <Motion>
              <div className="mt-4 flex flex-wrap gap-2">
                {secondaryChips.map((chip, index) => (
                  <Chip key={index}>{chip}</Chip>
                ))}
              </div>
            </Motion>
          </div>
        )}
      </div>
    </section>
  );
};
