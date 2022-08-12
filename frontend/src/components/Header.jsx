import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex items-center w-full h-screen px-4 bg-center bg-cover bg-hero-image">
          <div className="font-extrabold text-center text-white uppercase">
            <h1 className="text-6xl">Les chasseurs de reptiliens</h1>
            <h3>Et encore plus</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
