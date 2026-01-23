import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.documentElement.classList.add("motion-force");

createRoot(document.getElementById("root")!).render(<App />);
