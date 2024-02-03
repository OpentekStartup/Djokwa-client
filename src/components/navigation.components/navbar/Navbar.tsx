import React from "react";
import { NavLink } from "react-router-dom";

// type Props = {}

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/home">Home page</NavLink>
      <NavLink to="/about">About page</NavLink>
    </nav>
  );
};
