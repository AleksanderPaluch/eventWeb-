
import SectionHeader from "../SectionHeader/SectionHeader";


const Chip = ({ children }) => {
  return (
    <span className="rounded bg-zinc-800 px-4 py-2 text-xl font-semibold text-white uppercase ">
      {children}
    </span>
  );
};

export const Live = () => {
  return (
    <section
      id="Sushi-offer"
      className="h-[2000px]  mx-auto max-w-6xl px-4 pt-32 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title="sushi LIVE COOKING" side="left" />

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
      <div className=" grid my-18 md:grid-cols-2 gap-8  ">
        <div className="">
          <p className="text-3xl font-bold">DLA FIRM</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {" "}
            <Chip>Eventy firmowe</Chip>
            <Chip>Targi</Chip>
            <Chip>Konferencje</Chip>
            <Chip>Wigilie</Chip>
            <Chip>Gale</Chip>
            <Chip>Premiery produktów</Chip>
          </div>
        </div>

        <div className="">
          <p className="text-3xl font-bold">DLA KLIENTÓW PRYWATNYCH</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {" "}
            <Chip>Wesela</Chip>
            <Chip>Urodziny</Chip>
            <Chip>Domówki</Chip>
            <Chip>Wieczory panieńskie</Chip>
            <Chip>Garden party</Chip>
          </div>
        </div>
      </div>
    </section>
  );
};
