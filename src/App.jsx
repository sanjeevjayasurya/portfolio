import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main className="font-sans bg-white w-full dark:bg-gray-800">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;
