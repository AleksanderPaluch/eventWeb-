import { Bio } from "./components/Bio/Bio";
import { Hero } from "./components/Hero/Hero";
import { Live } from "./components/Live/Live";
import { Masterclass } from "./components/Masterclass/Masterclass";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="bg-zinc-950">
        <Nav />
        {/* <Hero /> */}
        <Live />
        <Masterclass />
        <Bio />
      </div>
    </>
  );
}

export default App;
