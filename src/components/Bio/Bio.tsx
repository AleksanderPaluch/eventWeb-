import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";

export const Bio = () => {
  return (
    <section
      id="Sushi-offer"
      className="h-100vh  mx-auto max-w-6xl px-4 py-48 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title="Oferta" side="left" />
      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 w-3/5">
        <Reveal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid fuga error laudantium deserunt aliquam mollitia sint, maxime
            obcaecati illum! Tempora quidem dolor odit atque possimus, iusto
            perferendis dolores! Aliquid.
          </p>
        </Reveal>
                <Reveal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid fuga error laudantium deserunt aliquam mollitia sint, maxime
            obcaecati illum! Tempora quidem dolor odit atque possimus, iusto
            perferendis dolores! Aliquid.
          </p>
        </Reveal>
                <Reveal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid fuga error laudantium deserunt aliquam mollitia sint, maxime
            obcaecati illum! Tempora quidem dolor odit atque possimus, iusto
            perferendis dolores! Aliquid.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
