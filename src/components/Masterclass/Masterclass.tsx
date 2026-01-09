import { Section } from "../Section/Section";

const data = {
  id: "Masterclass",
  title: "Warsztaty, które uczą, bawią i integrują",
  header: "Sushi Masterclass",
  text: "Masterclass sushi to praktyczne warsztaty, podczas których uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa. To połączenie nauki, zabawy i wspólnego działania — idealne dla grup szukających oryginalnej i angażującej atrakcji. Każdy uczestnik otrzymuje własne stanowisko pracy, komplet składników oraz wskazówki krok po kroku.",
  chipsTitle: "W ramach warsztatów zapewniamy:",
  chips: [
    "indywidualne stanowiska",
    "produkty premium",
    "przyjazną atmosferę",
    "naukę technik sushi krok po kroku",
    "sushi przygotowane przez uczestników",
  ],
};

export const Masterclass = () => {
  return (
    <Section
      id={data.id}
      title={data.title}
      header={data.header}
      text={data.text}
      chipsTitle={data.chipsTitle}
      chips={data.chips}
    />
  );
};
