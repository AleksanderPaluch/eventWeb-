import { Bio } from "./components/Bio/Bio";
import { Hero } from "./components/Hero/Hero";
import { Live } from "./components/Live/Live";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="bg-zinc-950">
        <Nav />
        <Hero />
        <Live />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
        <Bio />
      </div>
    </>
  );
}

export default App;
