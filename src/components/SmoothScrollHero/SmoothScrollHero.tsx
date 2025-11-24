import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import logo from "../../assets/logo.svg";
import heroChef from "../../assets/heroChef.jpg";

import { FiArrowRight } from "react-icons/fi";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Nav />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <div className="flex items-center gap-2 text-lg font-bold">
        <img className="w-6" src={logo} alt="logo" />
        <p>EVENT CHEF</p>
      </div>

      {/* <logo className="text-3xl mix-blend-difference" /> */}
      <button
        onClick={() => {
          document.getElementById("Sushi-offer")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-lg text-zinc-400"
      >
        OFERTA <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

const clip1 = useTransform(scrollY, [0, 1500], [15, 0]);   // instead of [25, 0]
const clip2 = useTransform(scrollY, [0, 1500], [90, 100]); // instead of [75, 100]


  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["90%", "180%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${heroChef})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="Sushi-offer"
      className="h-[2000px] mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Sushi Event Warszawa
      </motion.h1>
    </section>
  );
};
