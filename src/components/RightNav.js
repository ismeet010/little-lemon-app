import React from 'react'
import "../nav.css";
import logo from "../assets/logo.png";
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
    <nav>
      <img src={logo} alt="logo" width={"200px"} height={"70px"}></img>

      <div className="menu-icon">
        <i className="fa fa-bars menu" aria-hidden="true" onClick={showMenu}></i>
      </div>
      <section class={active ? "slider active" : "slider"}>
        <ul id="menu">
          <div className="closed">
            <i
              class="fa fa-times close"
              aria-hidden="true"
              onClick={showMenu}
            ></i>
          </div>
          <li>
            <NavLink class="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink class="link" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink class="link" to="menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink class="link" to="reservation">
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink class="link" to="login">
              Login
            </NavLink>
          </li>
        </ul>
        <div class="bottomborder"></div>
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
  );
}

export default RightNav