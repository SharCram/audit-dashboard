import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ title, icon, func}) => {

  const activeLink = 'text-xl flex gap-3 items-center mb-7 p-2 rounded-l-full px-5 bg-main-bg'
  const normalLink = 'text-white text-xl flex gap-3 items-center mb-7 hover:bg-maroon-light p-2 rounded-l-full px-5'

  return (
    <NavLink to={`${title.toLowerCase()}`} key={title} onClick={func} 
    className={({ isActive }) => isActive ? activeLink : normalLink}
    >
      {icon}
      <h1>{title}</h1>
    </NavLink>
  );
};

export default NavButton;
