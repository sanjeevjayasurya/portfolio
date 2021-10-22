import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { History } from "./components/History";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="font-sans bg-white w-full dark:bg-gray-800">
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
