import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Pendu from "./components/pendu/Pendu";

import "./index.css";
import LayerBasic from "./layers/LayerBasic";
import Section from "./components/Section";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LayerBasic />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pendu", element: <Pendu /> },
        { path: "/section", element: <Section /> },
      ],
    },
  ]);
  return element;
};

export default App;
