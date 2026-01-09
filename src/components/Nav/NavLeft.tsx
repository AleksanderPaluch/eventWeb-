import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";

interface NavLeftProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavLinkProps {
  text: string;
}

export const NavLeft: React.FC<NavLeftProps> = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-zinc-50 text-2xl"
        onClick={() => setIsOpen(pv => !pv)}
      >
        <FiMenu />
      </motion.button>
      <img src={logo} alt="logo" className="w-8 h-8" />
      <NavLink text="Live Cooking" />
      <NavLink text="Sushi Masterclass" />
      <NavLink text="Oferta" />
      <NavLink text="O nas" />
    </div>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <a
      href={`#${text}`}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-zinc-400">{text}</span>
        <span className="flex items-center h-[30px] text-zinc-100">{text}</span>
      </motion.div>
    </a>
  );
};
