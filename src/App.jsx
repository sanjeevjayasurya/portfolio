import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main className="font-sans bg-white w-full dark:bg-gray-800">
      <div>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;
