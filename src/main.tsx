import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { siteConfig } from "@/config/site";

/** Pasang logo resmi sebagai favicon & ikon layar utama (dari config). */
function setIcon(rel: string, attrs: Record<string, string> = {}) {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = siteConfig.assets.logo;
  Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
  document.head.appendChild(link);
}
setIcon("icon", { type: "image/png" });
setIcon("apple-touch-icon");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
