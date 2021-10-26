import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import { Hero } from "./components/Hero";
import { History } from "./components/History";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Social } from "./components/Social";

function App() {
  return (
    <main className="font-sans bg-white w-full dark:bg-gray-800">
      <Social />
      <DarkModeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <History />
      <Contact />
    </main>
  );
}

export default App;
