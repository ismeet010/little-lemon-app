import React from 'react'
import "../nav.css";

const RightNav = (open) => {
  return (
//     <Routes> 
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/booking" element={<BookingPage />}></Route>
// </Routes>
    <div className="menu">
      <ul id="menu" open={open}>
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