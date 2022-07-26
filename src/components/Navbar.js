import React from 'react'
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config"

const Navbar = () => {

  const navigate = useNavigate();
  let isAuth = localStorage.getItem("isAuth");

  const signOutHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      navigate("/login")
    })
  };

  const links = !isAuth ? (
    <li>
      <NavLink to="/login"> Log In </NavLink>
    </li>
  ) : (
    <>
      <li>
        <NavLink to="/createpost">
          Create post
        </NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={signOutHandler}> Log Out </NavLink>
      </li>
    </>
  );

  return (
    <nav className={classes.navbar}>
      <h1 className={classes.heading}>Blog App</h1>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        {links}
      </ul>
    </nav>
  );
}

export default Navbar;