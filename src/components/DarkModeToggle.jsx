import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <label className="switch">
      <span>{isDark}</span>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />{" "}
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeToggle