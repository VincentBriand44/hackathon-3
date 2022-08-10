import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

import "./index.css";
import LayerBasic from "./layers/LayerBasic";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LayerBasic />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return element;
};

export default App;
