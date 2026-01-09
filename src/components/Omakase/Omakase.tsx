import { Section } from "../Section/Section";

const data = {
  id: "Omakase",
  side: "left" as const,
  title: "Omakase",
  header: "sushi OMAKASE",
  text: "Omakase to wyjątkowe doświadczenie kulinarne, które pozwala Ci zaufać szefowi kuchni i cieszyć się starannie dobranym menu. W dosłownym tłumaczeniu z japońskiego oznacza 'powierzyć się' lub 'zostawić w rękach szefa kuchni'. To filozofia jedzenia, która podkreśla kreatywność, sezonowość i najwyższą jakość składników. Wybierając Omakase, pozwalasz szefowi kuchni stworzyć dla Ciebie niezapomnianą podróż smaków, dostosowaną do Twoich preferencji i aktualnych trendów kulinarnych.",
  chipsTitle: "DLACZEGO OMAKASE?",
  chips: ["Unikalne doświadczenie kulinarne", "Sezonowe i świeże składniki"],
};

export const Omakase = () => {
  return (
    <Section
      id={data.id}
      side={data.side}
      title={data.title}
      header={data.header}
      text={data.text}
      chipsTitle={data.chipsTitle}
      chips={data.chips}
    />
  );
};
