import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/galano/stylesheet.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import Learn from "./routes/learn.tsx";
import EarnPoints from "./routes/earn-points.tsx";
import DigitalPass from "./routes/digital-pass.tsx";
import ShareKnowledge from "./routes/share-knowledge.tsx";
import RnD from "./routes/research-and-development.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/earn-points",
    element: <EarnPoints />,
  },
  {
    path: "/digital-pass",
    element: <DigitalPass />,
  },
  {
    path: "/share-knowledge",
    element: <ShareKnowledge />,
  },
  {
    path: "/research-and-development",
    element: <RnD />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
