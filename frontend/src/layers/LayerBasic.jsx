import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function LayerBasic() {
  return (
    <>
      <Navbar />
      <div className="container pt-32 pb-10 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default LayerBasic;
