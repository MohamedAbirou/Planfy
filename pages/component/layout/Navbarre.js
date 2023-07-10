"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../../assets/img/Logo1.png";

const Navbarre = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    //console.log(windowWidth)
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/*pc Mode */}
      {windowWidth > 976 ? (
        <nav className="container m-auto flex justify-between items-center mt-2">
          <Image src={Logo} alt="LogoImage" className="ml-7 mt-2 xl:w-38 lg:w-36 md:w-36 sm:w-36 xs:w-32" />
          <div className="flex">
            <Link
              className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
              href="/"
            >
              <h1>Home</h1>
            </Link>
            <Link
              className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
              href="/over"
            >
              <h1>Over Ons</h1>
            </Link>
            <Link
              className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
              href="/diensten"
            >
              <h1>Diensten</h1>
            </Link>
            <Link
              className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
              href="/contact"
            >
              <h1>Contact</h1>
            </Link>
          </div>
          <button
            type="button"
            className="ml-2 mr-2 basicColor hover:text-pink-700 bg-pink-300 pl-5 pr-5 font-bold pt-1 pb-1 rounded-md text-xl hover:bg-pink-400 hover:shadow-pink-600 hover:shadow-sm  transition-colors ease-in transform cursor-pointer "
            onClick={() => { }}
          >
            <h1>Login</h1>
          </button>
        </nav>
      ) : (
        <nav className="container m-auto flex justify-between items-center mt-2">
          <Image src={Logo} alt="LogoImage" className="sm:ml-5 xs:-ml-5 mt-2 xl:w-36 lg:w-36 md:w-36 sm:w-36 xs:w-32" />
          <button
            id="menu-btn"
            open={menuOpen}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className="ml-auto sm:mr-5 xs:-mr-5 hamburger text-3xl lg:hidden focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className="lg:hidden">
            <div
              id="menu"
              className={`${menuOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
                } absolute inset-x-0 z-20 flex-col transition-all duration-300 ease-in-out items-center flex self-end py-8 mt-10 space-y-6 bg-white lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 md:flex md:items-center sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
            >
              <Link
                className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
                href="/"
              >
                <h1>Home</h1>
              </Link>
              <Link
                className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
                href="/over"
              >
                <h1>Over Ons</h1>
              </Link>
              <Link
                className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
                href="/diensten"
              >
                <h1>Diensten</h1>
              </Link>
              <Link
                className="ml-5 mr-5 text-xl basicColor hover:text-pink-700 font-medium transition-colors ease-in transform cursor-pointer"
                href="/contact"
              >
                <h1>Contact</h1>
              </Link>

              <button
                type="button"
                className="ml-2 mr-2 basicColor hover:text-pink-700 bg-pink-300 pl-5 pr-5 font-bold pt-1 pb-1 rounded-md text-xl hover:bg-pink-400 hover:shadow-pink-600 hover:shadow-sm  transition-colors ease-in transform cursor-pointer "
                onClick={() => { }}
              >
                <h1>Login</h1>
              </button>
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Navbarre;
