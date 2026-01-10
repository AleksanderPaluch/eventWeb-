import { SectionHeader } from "./SectionHeader";
import { SectionText } from "./SectionText";
import { SectionChips } from "./SectionChips";

interface SectionProps {
  id: string;
  side: "left" | "right";
  title?: string;
  header: string;
  text?: string;
  table?: React.ReactNode;
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
  table,
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
      <SectionText title={title} text={text} />
      {table && <div className="mt-16">{table}</div>}
      <SectionChips
        chipsTitle={chipsTitle}
        chips={chips}
        secondaryChipsTitle={secondaryChipsTitle}
        secondaryChips={secondaryChips}
      />
    </section>
  );
};
