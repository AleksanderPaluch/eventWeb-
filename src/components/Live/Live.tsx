import { Chip } from "../Chip/Chip";
import { Motion } from "../Motion/Motion";
import SectionHeader from "../SectionHeader/SectionHeader";

export const Live = () => {
  return (
    <section
      id="Live"
      className="mx-auto max-w-6xl px-4 pt-32 text-zinc-50 bg-zinc-950"
    >
      <SectionHeader title="sushi LIVE COOKING" side="left" />

      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 w-3/5">
        {" "}
        <Motion>
          {" "}
          <p className="text-zinc-50 text-3xl ">
            Wyjątkowe doświadczenie kulinarne na <br /> Twoim wydarzeniu
          </p>
        </Motion>
        <Motion>
          {" "}
          <p className="text-zinc-50 text-xl w-3/4">
            Live cooking to pokaz przygotowywania sushi na żywo, prosto przed
            Twoimi gośćmi. To połączenie gotowania, zabawy i efektownego show,
            które tworzy wyjątkową atmosferę. Dzięki temu każde wydarzenie staje
            się ciekawsze, pełne energii i zapada w pamięć.
          </p>
        </Motion>
      </div>
      <div className=" grid my-32 md:grid-cols-2 gap-16  ">
        <div className="">
          <Motion>
            {" "}
            <p className="text-3xl mb-6 font-bold">DLA FIRM</p>
          </Motion>
          <Motion>
            {" "}
            <div className="mt-4 flex flex-wrap gap-2">
              {" "}
              <Chip>Eventy firmowe</Chip>
              <Chip>Targi</Chip>
              <Chip>Konferencje</Chip>
              <Chip>Wigilie</Chip>
              <Chip>Gale</Chip>
              <Chip>Premiery produktów</Chip>
            </div>{" "}
          </Motion>
        </div>

        <div className="">
          <Motion>
            {" "}
            <p className="text-3xl  mb-6  font-bold">DLA KLIENTÓW PRYWATNYCH</p>
          </Motion>
          <Motion>
            {" "}
            <div className="mt-4 flex flex-wrap gap-2">
              {" "}
              <Chip>Wesela</Chip>
              <Chip>Urodziny</Chip>
              <Chip>Domówki</Chip>
              <Chip>Wieczory panieńskie</Chip>
              <Chip>Garden party</Chip>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};
