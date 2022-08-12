import { useRoutes } from "react-router-dom";

import Inventory from "@pages/Inventory";
import SecretPage from "./components/SecretPage";
import LayerBasic from "./layers/LayerBasic";
import LayerHome from "./layers/LayerHome";

import Home from "./pages/Home";
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
