import React from 'react'
import "../nav.css";

const RightNav = (open) => {
  return (
    <div>
      <ul id="menu" className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#order">Order online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default RightNav