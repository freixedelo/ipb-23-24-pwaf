import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Aula from "./Aula.jsx";
import Coins from "./Coins.jsx";
import Vat from "./Vat.jsx";
import Meto from "./Meto.jsx";
import MeteoPlace from "./MeteoPlace.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aulas",
    element: <Aula />,
  },
  {
    path: "/coins",
    element: <Coins />,
  },
  {
    path: "/vat",
    element: <Vat />,
  },
  {
    path: "/meteo",
    element: <Meto />,
  },
  {
    path: "meteo/:globalId",
    element: <MeteoPlace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
