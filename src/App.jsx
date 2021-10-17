import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="font-sans bg-white w-full dark:bg-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;
