import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ title, icon, func}) => {
  return (
    <NavLink to={`${title.toLowerCase()}`} key={title} onClick={func} 
    className={`text-white text-xl flex gap-3 items-center mb-7 font-semibold hover:bg-maroon-light p-2 rounded-l-full`}
    >
      {icon}
      <h1>{title}</h1>
    </NavLink>
  );
};

export default NavButton;
