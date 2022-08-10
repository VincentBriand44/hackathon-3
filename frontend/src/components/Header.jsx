import { Button, Navbar } from "react-daisyui";

function Header() {
  return (
    <div className="flex items-center justify-center w-full gap-2 p-4 font-sans bg-white component-preview">
      <Navbar>
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
    </div>
  );
}

export default Header;
