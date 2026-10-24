
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./Context/UserContext";
import { ThemeProvider } from "./Context/Theme";
import "./index.css";

createRoot(document.getElementById("root")).render(
  
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  
);
