import { Chip } from "../Chip/Chip";
import { Motion } from "../Motion/Motion";
import SectionHeader from "../SectionHeader/SectionHeader";

export const Masterclass = () => {
  return (
    <section
      id="Masterclass"
      className="  mx-auto max-w-6xl px-4 pt-32 text-zinc-50 bg-zinc-950 flex flex-col items-end"
    >
      <SectionHeader title="Sushi Masterclass" side="right" />

      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 w-3/6  text-right">
        <Motion>
          {" "}
          <p className="text-zinc-50 text-3xl ">
            Warsztaty, które uczą, bawią i integrują
          </p>
        </Motion>
        <Motion>
          {" "}
          <p className="text-zinc-50 text-xl w-4/5 ml-auto">
            Masterclass sushi to praktyczne warsztaty, podczas których
            uczestnicy tworzą własne rolki pod okiem doświadczonego sushi chefa.
            To połączenie nauki, zabawy i wspólnego działania — idealne dla grup
            szukających oryginalnej i angażującej atrakcji. Każdy uczestnik
            otrzymuje własne stanowisko pracy, komplet składników oraz wskazówki
            krok po kroku.
          </p>
        </Motion>
      </div>
      <div className="my-32 text-right">
        <Motion>
          {" "}
          <p className="text-3xl  mb-6  font-bold uppercase">
            W ramach warsztatów zapewniamy:
          </p>
        </Motion>

        <Motion>
          {" "}
          <div className="mt-4 flex flex-wrap gap-2 justify-end">
            {" "}
            <Chip>indywidualne stanowiska</Chip>
            <Chip>produkty premium</Chip>
            <Chip>przyjazną atmosferę</Chip>
            <Chip>naukę technik sushi krok po kroku</Chip>
            <Chip>sushi przygotowane przez uczestników</Chip>
          </div>
        </Motion>
      </div>
    </section>
  );
};
