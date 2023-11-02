import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "../src/components/Toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Toaster />
    <App />
  </Router>
);
