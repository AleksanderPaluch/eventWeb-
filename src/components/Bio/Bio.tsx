import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <section
      id="Sushi-offer"
      className="h-[2000px]  mx-auto max-w-6xl px-4 py-48 text-white bg-zinc-950"
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
