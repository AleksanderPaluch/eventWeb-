import { Motion } from "../Motion/Motion"

export const SectionText = ({ title, text }) => {
  return (
      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2  ">
        <Motion>
          <p className="text-3xl font-semibold">{title}</p>
        </Motion>
        <Motion>
          <p className="text-xl  lg:w-3/5">{text}</p>
        </Motion>
      </div>
  )
}
