import { Hero } from "./components/Hero/Hero";
import { Live } from "./components/Live/Live";
import { Masterclass } from "./components/Masterclass/Masterclass";
import { Nav } from "./components/Nav/Nav";
import { Offer } from "./components/Offer/Offer";
import { Omakase } from "./components/Omakase/Omakase";

function App() {
  return (
    <>
      <div className="bg-zinc-950  ">
        <Nav />
        {/* <Hero /> */}
        <Live />
        <Masterclass />
        <Omakase />
        {/* <Offer /> */}
      </div>
    </>
  );
}

export default App;
