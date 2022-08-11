import { Footer } from "react-daisyui";

function MyFooter() {
  return (
    <Footer className="flex justify-between p-1 bg-neutral text-neutral-content">
      <div className="m-8">
        <Footer.Title>Services</Footer.Title>
        <a href="#null" className="link link-hover">
          Branding
        </a>
        <a href="#null" className="link link-hover">
          Design
        </a>
        <a href="#null" className="link link-hover">
          Marketing
        </a>
      </div>

      <div className="p-8">
        <Footer.Title>Company</Footer.Title>
        <a href="#null" className=" link link-hover">
          About us
        </a>
        <a href="#null" className="link link-hover">
          Contact
        </a>
      </div>
      <div className="m-8">
        <Footer.Title>Legal</Footer.Title>
        <a href="#null" className="link link-hover">
          Terms of use
        </a>
        <a href="#null" className="link link-hover">
          Privacy policy
        </a>
        <a href="#null" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </Footer>
  );
}

export default MyFooter;
