import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="static">
        <div className=" absolute top-96 left-16 uppercase text-center text-white font-extrabold mr-8">
          <h1 className="text-4xl mb-8 md:text-6xl">
            sacrificial reptilian corporation
          </h1>
          <h3>want to know more !</h3>
        </div>
      </div>
      <div className="bg-hero-gif w-full h-screen bg-cover bg-center  px-4 md:w-full" />
    </div>
  );
}

export default Header;
