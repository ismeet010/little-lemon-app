import React from 'react'
import Spclcard from './Spclcard';
import "../wspcl.css"

const Weekspcl = () => {
  return (
    <section>
      <h2 class="heading">This week Specials!</h2>
      <div class="wspcl">
        <Spclcard />
        <Spclcard />
        <Spclcard />
      </div>
    </section>
  );
}

export default Weekspcl