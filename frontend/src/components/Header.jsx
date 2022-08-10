import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="bg-hero-image w-full h-screen bg-cover bg-center flex items-center px-4">
          <div className="uppercase text-center text-white font-extrabold">
            <h1 className="text-6xl">Titre de la mort qui tue</h1>
            <h3>Et encore plus</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
