import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div class="fixed top-1/2 right-4">
      <label for="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onChange={(e) => setIsDark(e.target.checked)}
          ></input>
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
    // {/* <span>{isDark}</span> */}
    // {/* <input
    //   className="fixed top-1/2 right-10"
    //   type="checkbox"
    //   checked={isDark}
    //   onChange={(e) => setIsDark(e.target.checked)}
    // /> */}
    // {/* <span className="slider round"></span> */}
  );
};

export default DarkModeToggle;
