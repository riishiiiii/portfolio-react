import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CustomCursor from "./components/Custom-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <CustomCursor />
  </StrictMode>
);

// Enable performance monitoring in production
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log);
}
