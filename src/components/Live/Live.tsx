import { Section } from "../Section/Section";

const data = {
  id: "Live",
  side: "left" as const,
  title: "Wyjątkowe doświadczenie kulinarne na Twoim wydarzeniu",
  header: "Sushi Live Cooking",
  text: "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania, zabawy i efektownego show, które tworzy wyjątkową atmosferę. Dzięki temu każde wydarzenie staje się ciekawsze, pełne energii i zapada w pamięć.",
  chipsTitle: "Dla Firm",
  chips: [
    "Eventy firmowe",
    "Targi",
    "Konferencje",
    "Wigilie",
    "Gale",
    "Premiery produktów",
  ],
  secondaryChipsTitle: "Dla Osób Prywatnych",
  secondaryChips: [
    "Wesela",
    "Urodziny",
    "Domówki",
    "Wieczory panieńskie",
    "Garden party",
  ],
};

export const Live = () => {
  return (
    <Section
      id={data.id}
      side={data.side}
      title={data.title}
      header={data.header}
      text={data.text}
      chipsTitle={data.chipsTitle}
      chips={data.chips}
      secondaryChipsTitle={data.secondaryChipsTitle}
      secondaryChips={data.secondaryChips}
    />
  );
};
