import SectionHeader from "../SectionHeader/SectionHeader";

import { Motion } from "../Motion/Motion";

export const Bio = () => {
  return (
    <section
      id="Oferta"
      className="h-[1000px] py-42 mx-auto max-w-6xl px-4  text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title="Oferta" side="left" />
      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 w-3/5">
        <Motion>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid fuga error laudantium deserunt aliquam mollitia sint, maxime
            obcaecati illum! Tempora quidem dolor odit atque possimus, iusto
            perferendis dolores! Aliquid.
          </p>
        </Motion>
        <Motion>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid fuga error laudantium deserunt aliquam mollitia sint, maxime
            obcaecati illum! Tempora quidem dolor odit atque possimus, iusto
            perferendis dolores! Aliquid.
          </p>
        </Motion>
        <Motion>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid fuga error laudantium deserunt aliquam mollitia sint, maxime
            obcaecati illum! Tempora quidem dolor odit atque possimus, iusto
            perferendis dolores! Aliquid.
          </p>
        </Motion>
      </div>
    </section>
  );
};
