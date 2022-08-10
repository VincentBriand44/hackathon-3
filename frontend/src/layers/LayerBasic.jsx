import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function LayerBasic() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayerBasic;
