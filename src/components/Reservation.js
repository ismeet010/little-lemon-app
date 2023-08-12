import React from 'react'
import "../reservation.css"

const Reservation = () => {
    function reserve(e) {
      e.preventDefault();
    }

  return (
    <div class="reserDiv">
      <form class="reservationForm" onSubmit={reserve}>
        <label for="date">Date</label>
        <input type="date" id="date"></input>
        <label for="time">Time</label>
        <select name="time" id="time">
          <option value="12">12:00 PM</option>
          <option value="2">2:00 PM</option>
          <option value="4">4:00 PM</option>
          <option value="6">6:00 PM</option>
          <option value="8">8:00 PM</option>
        </select>
        <label for="guests">Number of guests</label>
        <input type="number" min="2" max="15" id="guests"></input>
        <label for="occasn">Occasion</label>
        <select name="Occasion" id="occasn">
          <option value="bday">Birthday</option>
          <option value="aniversary">Aniversary</option>
        </select>
        <button type="submit">
          {" "}
          Make a reservation{" "}
        </button>
      </form>
    </div>
  );
}

export default Reservation