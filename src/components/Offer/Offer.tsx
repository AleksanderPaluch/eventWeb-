

import { Motion } from "../Motion/Motion";
import { SectionHeader } from "../Section/SectionHeader";
import { PricingTable } from "./Table";


export const Offer = () => {
  return (
    <section
      id="Oferta"
      className="pt-10 pb-42 mx-auto max-w-6xl px-4 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title="Oferta" side="left" />

      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 ">
      
        <Motion>
          <p className=" text-4xl font-semibold  ">
            Sushi Live Cooking & Masterclass
          </p>
        </Motion>
        <Motion>
          <PricingTable />
        </Motion>
      </div>
    </section>
  );
};
