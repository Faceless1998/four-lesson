import { useTheme } from "./ThemeProvider";
import "./switcher.css"

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();

    return(

        <label className="switch">
            <input type="checkbox" checked={ theme === "dark" } onClick={toggleTheme}  />
            <span className="slider">
                {/* <span className="sun">☀️</span>
                <span className="moon">🌙</span> */}
            </span>
        </label>


        // <button onClick={toggleTheme} className="button">


        //     { theme === "light" ? "Light" : "Dark" } Mode


        // </button>


    )
}

export default ThemeToggleButton;