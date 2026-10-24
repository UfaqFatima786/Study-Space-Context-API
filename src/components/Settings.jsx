
import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";
function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="settings-content">
      <div className="panel-heading">
        <div>
          <h2>Appearance Settings</h2>
          <p>Make your dashboard comfortable to use.</p>
        </div>
        <span className="panel-symbol">⚙</span>
      </div>

      <div className="settings-row">
        <div className="settings-description">
          <span className="settings-icon">
            {theme === "Light" ? "☀" : "☾"}
          </span>
          <div>
            <strong>{theme} Mode</strong>
            <p>
              {theme === "Light"
                ? "A bright, clean interface for your workspace."
                : "A dark, easy-on-the-eyes interface."}
            </p>
          </div>
        </div>

        <button className="primary-button" onClick={toggleTheme}>
          Switch to {theme === "Light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <p className="settings-hint">
        ✦ Your preference updates the entire dashboard instantly.
      </p>
    </div>
  );
}

export default Settings;
