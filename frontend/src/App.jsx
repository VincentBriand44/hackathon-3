import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Pendu from "./components/pendu/Pendu";
import LayerBasic from "./layers/LayerBasic";
import Section from "./components/Section";
import Inventory from "./pages/Inventory";
import SecretPage from "./components/SecretPage";
import LayerHome from "./layers/LayerHome";
import Shop from "./pages/Shop";
import Training from "./pages/Training";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <LayerHome />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/",
      element: <LayerBasic />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pendu", element: <Pendu /> },
        { path: "/section", element: <Section /> },

        { path: "/shop", element: <Shop /> },
        { path: "/training", element: <Training /> },
        { path: "/inventory", element: <Inventory /> },
        { path: "/SecretPage", element: <SecretPage /> },
      ],
    },
  ]);
  return element;
}

export default App;
