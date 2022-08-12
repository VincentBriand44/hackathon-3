import { Footer } from "react-daisyui";
import { Facebook, Instagram, Twitter } from "react-feather";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function MyFooter() {
  return (
    <Footer className="flex flex-col justify-around text-xl md:flex-row bg-neutral text-neutral-content">
      <div className="m-8">
        <Footer.Title>Services</Footer.Title>
        <a href="#null" className="link link-hover">
          Mentions Legales
        </a>
        <NavHashLink to="/home#faq" className="link link-hover">
          Faq
        </NavHashLink>
        <a href="#null" className="link link-hover">
          Production
        </a>
      </div>

      <div className="p-8">
        <Footer.Title>S'informer et acheter</Footer.Title>
        <NavLink to="secretPage" className=" link link-hover">
          A propos de nous
        </NavLink>
        <a href="#null" className="link link-hover">
          Formation
        </a>
        <NavLink to="shop" className="link link-hover">
          Acheter
        </NavLink>
      </div>
      <div className="m-8">
        <Footer.Title>Social</Footer.Title>

        <a href="#null" className="flex gap-2 link link-hover">
          <Facebook />
          Facebook
        </a>
        <a
          href="https://twitter.com/illumireptilien?lang=fr"
          className="flex gap-2 link link-hover"
        >
          <Twitter />
          Twitter
        </a>
        <a href="#null" className="flex gap-2 link link-hover">
          <Instagram />
          Instagram
        </a>
      </div>
    </Footer>
  );
}

export default MyFooter;
