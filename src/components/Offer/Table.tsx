import { Motion } from "../Motion/Motion";

export const PricingTable = () => {
  return (
    <>
      <table className="w-full mx-auto border border-zinc-800 text-left text-zinc-100">
        <thead className="bg-zinc-900 text-sm uppercase tracking-wide text-zinc-300">
          <tr className="text-lg font-semibold">
            <th className="px-6 py-4 ">Liczba osób</th>
            <th className="px-6 py-4">Basic</th>
            <th className="px-6 py-4">Premium</th>
            <th className="px-6 py-4">Omakase</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-800">
          <tr className=" text-md font-semibold">
            <td className="px-6 py-4 ">6 – 9 osób</td>
            <td className="px-6 py-4 ">130 / osoba</td>
            <td className="px-6 py-4">150 / osoba</td>
            <td className="px-6 py-4 ">250 / osoba</td>
          </tr>

          <tr className=" text-md font-semibold">
            <td className="px-6 py-4">10 – 14 osób</td>
            <td className="px-6 py-4">120 / osoba</td>
            <td className="px-6 py-4 ">140 / osoba</td>
            <td className="px-6 py-4 ">Indywidualnie</td>
          </tr>

          <tr className=" text-md font-semibold">
            <td className="px-6 py-4 ">15– 19 osób</td>
            <td className="px-6 py-4 ">110 / osoba</td>
            <td className="px-6 py-4 ">130 / osoba</td>
            <td className="px-6 py-4 ">Indywidualnie</td>
          </tr>
          <tr className=" text-md font-semibold">
            <td className="px-6 py-4 ">20+ osób</td>
            <td className="px-6 py-4 ">100 / osoba</td>
            <td className="px-6 py-4 ">120 / osoba</td>
            <td className="px-6 py-4 ">Indywidualnie</td>
          </tr>
        </tbody>
      </table>
      <Motion>
        {" "}
        <p className=" text-md my-2  text-zinc-300">
          Ostateczna cena zależy od liczby uczestników, lokalizacji oraz
          wybranego pakietu jakościowego.
        </p>
      </Motion>

      {/* <Motion>
        <p className=" text-lg text-zinc-300">
          Live Cooking i Sushi Masterclass wyceniane są w ten sam sposób —{" "}
          <br />
          różnią się formą, ale bazują na tych samych składnikach i jakości
          obsługi.
        </p>
      </Motion> */}
    </>
  );
};
