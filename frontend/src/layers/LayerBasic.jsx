import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MyFooter from "../components/Footer";

function LayerBasic() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default LayerBasic;
