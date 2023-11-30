import React from "react";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Modal from "./Modal";

const Header = () => {
  return (


    <header className="h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/Home" className="hover:text-[#E58D27] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Hombres" className="hover:text-[#E58D27] transition-colors">
            Hombres
          </Link>
        </li>
        <li>
          <Link to="/Mujeres" className="hover:text-[#E58D27] transition-colors">
            Mujeres
          </Link>
        </li>
        <li>
          <Link to="/Niños" className="hover:text-[#E58D27] transition-colors">
            Niños
          </Link>
        </li>
      </ul>

      <ul className="flex items-center gap-6 text-xl">
        <li>
          <NavLink to="/Modal" className="hover:text-[#E58D27] transition-colors">
            <RiShoppingCartLine />
          </NavLink>
        </li>

        <li>
          <Link to="/SignUp">
            <img src="https://img.freepik.com/vector-gratis/hombre-muestra-gesto-gran-idea_10045-637.jpg" className="w-8 h-8 object-cover rounded-full" alt="Avatar" />
          </Link>
        </li>
      </ul>
    </header>


  );
};

export default Header;
