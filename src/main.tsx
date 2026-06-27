import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

createRoot(document.getElementById("root")!).render(<App />);
