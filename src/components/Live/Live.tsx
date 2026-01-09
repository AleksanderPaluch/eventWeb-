
import { Section } from "../Section/Section";


const data = {
  id: "Live Cooking",
  title: "Wyjątkowe doświadczenie kulinarne na Twoim wydarzeniu",
  header: "Sushi Live Cooking",
  text: "Live cooking to pokaz przygotowywania sushi na żywo, prosto przed Twoimi gośćmi. To połączenie gotowania, zabawy i efektownego show, które tworzy wyjątkową atmosferę. Dzięki temu każde wydarzenie staje się ciekawsze, pełne energii i zapada w pamięć.",
  chipsTitle: "DLA FIRM",
  chips: ["Eventy firmowe", "Targi", "Konferencje", "Wigilie", "Gale", "Premiery produktów"],
  secondaryChipsTitle: "DLA OSÓB PRYWATNYCH",
  secondaryChips: ["Wesela", "Urodziny", "Domówki", "Wieczory panieńskie", "Garden party"],
};

export const Live = () => {
  return (
    <Section id={data.id} title={data.title} header={data.header} text={data.text} chipsTitle={data.chipsTitle} chips={data.chips} secondaryChipsTitle={data.secondaryChipsTitle} secondaryChips={data.secondaryChips} />
  );
};
