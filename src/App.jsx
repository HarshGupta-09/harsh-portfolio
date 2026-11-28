import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Journey from "./components/sections/Journey";
import Stats from "./components/sections/Stats";
import Work from "./components/sections/Work";
import Stack from "./components/sections/Stack";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
   
      <Navbar />

      <main>
        <Hero />
        <Journey />
        <Stats />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;