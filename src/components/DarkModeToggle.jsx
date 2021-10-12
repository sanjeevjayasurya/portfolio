import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <label class="switch">
      <span>{isDark}</span>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />{" "}
      <span class="slider round"></span>
    </label>
  );
};

export default DarkModeToggle