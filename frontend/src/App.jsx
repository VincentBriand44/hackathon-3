import { useRoutes } from "react-router-dom";

import LayerBasic from "./layers/LayerBasic";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Training from "./pages/Training";

import "./index.css";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LayerBasic />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/training", element: <Training /> },
      ],
    },
  ]);
  return element;
};

export default App;
