import { Section } from "../Section/Section";
import { PricingTable } from "./Table";

const data = {
  id: "Oferta",
  side: "left" as const,
  header: "Oferta",
   title: "Sushi Live Cooking & Masterclass",
};

export const Offer = () => {
  return (
    <Section
      id={data.id}
      side={data.side}
      header={data.header}
       title={data.title}
      table={<PricingTable />}
    />
  );
};
