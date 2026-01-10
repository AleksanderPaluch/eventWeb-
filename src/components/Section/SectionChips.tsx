import { Motion } from "../Motion/Motion"
import { Chip } from "./Chip"


export const SectionChips = ({ chipsTitle, chips, secondaryChipsTitle, secondaryChips }) => {
  return (
  <div
        className={
          secondaryChipsTitle ? " my-32 grid md:grid-cols-2 gap-8" : "my-32"
        }
      >
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
  )
}
