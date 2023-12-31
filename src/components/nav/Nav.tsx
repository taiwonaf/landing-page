import { useEffect, useState } from "react";
import LinkButton from "../button/LinkButton";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Hamburger from "../../assets/icons/Hamburger";
import Logo from "../utilis/Logo";

const navItems = [
  {
    name: "Timeline",
    path: "/timeline",
  },
  {
    name: "Overview",
    path: "/overview",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrollingFromTop, setIsScrollingFromTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsScrollingFromTop(true);
      } else {
        setIsScrollingFromTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`transition-all duration-300 fixed top-0 left-0 right-0 px-[33px]  z-[10000] ${
          !isScrollingFromTop
            ? "pt-[25px] bg-secondary"
            : "pt-[25px] md:pt-[63px] bg-transparent"
        } pb-[25px] border-b-[1px] border-b-white/[18%]`}
      >
        <div className="flex justify-between items-center max-w-[1440px] w-full mx-auto gap-[50px]">
          <Logo />
          {/* Desktop menu items */}
          <div className="hidden md:flex justify-between items-center max-w-[716px] w-full gap-[30px] font-monteserat">
            <ul className="flex justify-between items-center max-w-[423px] w-full gap-[20px]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-clip-text text-transparent bg-gradient-to-r from-[#903AFF] to-[#FF26B9] text-[16px]"
                        : "text-white text-[16px]"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <LinkButton text="Register" path="/register" />
          </div>
          {/* Mobile menu items */}
          <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            <Hamburger />
          </div>
        </div>
      </nav>
      <MobileMenu open={mobileMenu} setOpen={setMobileMenu} />
    </>
  );
};

export default Nav;
