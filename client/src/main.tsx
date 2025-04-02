import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

createRoot(document.getElementById("root")!).render(<App />);
