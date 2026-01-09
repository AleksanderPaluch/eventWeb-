import { Chip } from "./Chip";
import { Motion } from "../Motion/Motion";
import { SectionHeader } from "./SectionHeader";

interface SectionProps {
  id: string;
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
      className="pt-12 pb-42 mx-auto max-w-6xl px-4 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title={header} side="right" />

      {/* TEXT */}
      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 w-3/6 text-right ml-auto">
        <Motion>
          <p className="text-3xl font-semibold">{title}</p>
        </Motion>
        <Motion>
          <p className="text-xl w-4/5 ml-auto">{text}</p>
        </Motion>
      </div>

      {/* PRIMARY CHIPS */}

      <div   className={secondaryChipsTitle ? " mt-32 grid grid-cols-2 gap-8" : "mt-32"}>
        {chipsTitle && chips && (
          <div className="my-32">
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
          <div className="mt-32">
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
