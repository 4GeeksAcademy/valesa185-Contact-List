import React from "react";
import { createRoot } from "react-dom/client";

import "../styles/index.css";
import Layout from "./layout.js";

const root = createRoot(document.querySelector("#app"));

//render your react application
root.render(<Layout />);
