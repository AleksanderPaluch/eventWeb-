import { Motion } from "../Motion/Motion";
import { Chip } from "./Chip";

interface SectionChipsProps {
  chipsTitle?: string;
  chips?: string[];
  secondaryChipsTitle?: string;
  secondaryChips?: string[];
}

export const SectionChips: React.FC<SectionChipsProps> = ({
  chipsTitle,
  chips,
  secondaryChipsTitle,
  secondaryChips,
}) => {
  return (
    <div
      className={
        secondaryChipsTitle ? "my-12  grid md:grid-cols-2 gap-8" : "my-12"
      }
    >
      {chipsTitle && chips && (
        <div className="">
          <Motion>
            <p className="text-2xl font-semibold mb-2">{chipsTitle}</p>
          </Motion>

          <Motion>
            <div className=" flex flex-wrap gap-2 w-5/6">
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
            <p className="text-2xl font-semibold mb-2">{secondaryChipsTitle}</p>
          </Motion>
          <Motion>
            <div className="flex flex-wrap gap-2 ">
              {secondaryChips.map((chip, index) => (
                <Chip key={index}>{chip}</Chip>
              ))}
            </div>
          </Motion>
        </div>
      )}
    </div>
  );
};
