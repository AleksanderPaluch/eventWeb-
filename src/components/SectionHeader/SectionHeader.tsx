
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  side?: "left" | "right";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  side = "left",
}) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-12 mx-16 flex h-20  gap-8  font-black uppercase"
      style={{ flexDirection: side === "left" ? "row" : "row-reverse" }}
    >
      {/* <div className="h-[1px] w-full bg-zinc-500"></div> */}

      <h2>
        <p className=" text-end min-w-32 md:min-w-48 py-2 text-3xl font-black md:text-5xl">
          {title}
          <span className="text-primary">.</span>
        </p>
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
