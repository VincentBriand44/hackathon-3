import { useRoutes } from "react-router-dom";

import SecretPage from "./components/SecretPage";
import LayerBasic from "./layers/LayerBasic";
import LayerHome from "./layers/LayerHome";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Training from "./pages/Training";

import "./index.css";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <LayerHome />,

      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
      ],
    },
    {
      path: "/",
      element: <LayerBasic />,
      children: [
        { path: "/shop", element: <Shop /> },
        { path: "/training", element: <Training /> },
        { path: "/SecretPage", element: <SecretPage /> },
      ],
    },
  ]);
  return element;
};

export default App;
