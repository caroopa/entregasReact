import React from "react";
import { Link, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="">Home</CustomLink>
        <CustomLink to="PokeAPI">PokeApi</CustomLink>
        <CustomLink to="ToDoList">ToDo List</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
