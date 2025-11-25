import { FiArrowRight } from "react-icons/fi";
import logo from "../../assets/logo.svg";

export const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 h-16 text-white">
      <div className="flex items-center gap-2 text-lg font-bold">
        <img className="w-8" src={logo} alt="logo" />
        <p>EVENT CHEF</p>
      </div>

      {/* <logo className="text-3xl mix-blend-difference" /> */}
      <button
        onClick={() => {
          document.getElementById("Sushi-offer")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1  text-lg font-bold text-zinc-400"
      >
        <p>OFERTA</p>
        <FiArrowRight className="h-24" />
      </button>
    </nav>
  );
};