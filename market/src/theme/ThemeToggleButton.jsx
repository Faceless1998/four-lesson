import { useTheme } from "./ThemeProvider";
import "./switcher.css"

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme} className="button">
            { theme === "light" ? "Light" : "Dark" } Mode
        </button>
    )
}

export default ThemeToggleButton;