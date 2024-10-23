import React from 'react'
import "./nav.css";
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const RightNav = () => {
  const [active, setActive] = useState(false)

  const showMenu=() =>{
    setActive(!active)
  }


  return (
    //method ke arg me open tha..
    //     <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/booking" element={<BookingPage />}></Route>
    // </Routes>
    //section ka class menu tha.. ul ka id menu tha..
    <header className="bottomborder">
      <img src={logo} alt="logo" width={"150px"} height={"50px"}></img>
      <nav>
        <div className="menu-icon">
          <i
            className="fa fa-bars menu"
            aria-hidden="true"
            onClick={showMenu}
          ></i>
        </div>
        <section className={active ? "slider active" : "slider"}>
          <ul id="menu">
            <div className="closed">
              <i
                className="fa fa-times close"
                aria-hidden="true"
                onClick={showMenu}
              ></i>
            </div>
            <li>
              <NavLink className="link" to="little-lemon-app">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-app/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-app/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-app/reservation">
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="little-lemon-app/login">
                Login
              </NavLink>
            </li>
          </ul>
        </section>

        {/* //     <div className="menu">
    //   <ul id="menu" open={open}>
    //     <li>
    //       <a href="#">Home</a>
    //     </li>
    //     <li>
    //       <a href="#about">About</a>
    //     </li>
    //     <li>
    //       <a href="#menu">Menu</a>
    //     </li>
    //     <li>
    //       <a href="#reservations">Reservations</a>
    //     </li>
    //     <li>
    //       <a href="#order">Order online</a>
    //     </li>
    //     <li>
    //       <a href="#login">Login</a>
    //     </li>
    //   </ul>
    // </div> */}
      </nav>
    </header>
  );
}

export default RightNav