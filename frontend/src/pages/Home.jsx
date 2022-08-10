import { Button, Navbar } from "react-daisyui";

function Home() {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans bg-white">
      <Navbar>
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
    </div>
  );
}

export default Home;
