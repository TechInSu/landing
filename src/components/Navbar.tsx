import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import cn from "classnames";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <nav className="max-w-[1440px] m-auto overflow-x-hidden overflow-y-visible">
      <div className="font-galano text-gray-500 tracking-wider xl:text-base text-sm font-medium lg:px-16 px-5 m-auto h-16 flex justify-between items-center ">
        <Link to="/">
          <img className="xl:w-[unset] w-36" src={Logo} alt="" />
        </Link>
        <div className="xl:space-x-7 space-x-4 lg:block hidden">
          <Link to="/learn">Learn course</Link>
          <Link to="/earn-points">Earn points</Link>
          <Link to="/digital-pass">Play DP</Link>
          <a href="https://knowledger.org/wiz">WIZ</a>
          <Link to="/share-knowledge">Share Knowledge</Link>
          <Link to="/research-and-development">R&D</Link>
        </div>
        <a
          href="https://www.knowledger.org/platform/signUp"
          className="px-9 py-3 text-white bg-[#6A4FF5] rounded-md lg:block hidden"
        >
          Sign up
        </a>
        <img
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-10 lg:hidden block cursor-pointer z-50"
          src={Menu}
          alt=""
        />
        {/* <div className="w-max h-max top-0 bottom-0 left-0 right-0 overflow-x-hidden relative lg:hidden block z-10"> */}
      </div>
      {/* <div className=" top-0 bottom-0 left-0 right-0 bg-slate-300 "> */}
      <div
        className={cn(
          "lg:hidden block transition ease-in-out duration-500 absolute ",
          "top-0  left-0 right-0 bottom-0 w-screen h-screen bg-white z-30 ",
          {
            "translate-x-full": !menuOpen,
          }
        )}
      >
        <div className="flex flex-col text-xl p-5 space-y-4">
          <Link to="/learn">Learn course</Link>
          <Link to="/earn-points">Earn points</Link>
          <Link to="/digital-pass">Play DP</Link>
          <Link to="https://knowledger.org/wiz">WIZ</Link>
          <Link to="/share-knowledge">Share Knowledge</Link>
          <Link to="/research-and-development">R&D</Link>
          <Link
            to="https://www.knowledger.org/platform/signUp"
            className="px-9 py-3 text-white bg-[#6A4FF5] rounded-md w-max"
          >
            Sign up
          </Link>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
