import SectionHeader from "../SectionHeader/SectionHeader";

export const Masterclass = () => {
  return (
    <section
      id="Sushi-offer"
      className="  mx-auto max-w-6xl px-4 pt-32 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title="Sushi Masterclass" side="right" />

      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 w-3/5">
        <p className="text-zinc-50 text-2xl ">
          Wyjątkowe doświadczenie kulinarne na <br /> Twoim wydarzeniu
        </p>
        <p className="text-zinc-50 text-xl w-3/4">
          Live cooking to pokaz przygotowywania sushi na żywo, prosto przed
          Twoimi gośćmi. To połączenie gotowania, zabawy i efektownego show,
          które tworzy wyjątkową atmosferę. Dzięki temu każde wydarzenie staje
          się ciekawsze, pełne energii i zapada w pamięć.
        </p>
      </div>
    </section>
  );
};
