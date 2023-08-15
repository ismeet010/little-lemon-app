import React from 'react'
import Tcard from './Tcard';
import "../testimonial.css"


const Testimonial = () => {
    const data= [
      {
            name: "u2",
            rating: 3.5,
            quote:"ihiub"
        },
        {
            name: "u2",
            rating: 3.5,
            quote:"ihiub"
        },
        {
            name: "I",
            rating: 3,
            quote:"ihiubuigui"
        },
        {
            name: "I",
            rating: 3,
            quote:"ihiubuigui"
        }
    ]
  return (
    <section class="testimonials ">
      <div class="max-width">
        <h2 class="heading">What people say about us!</h2>
        <div class="cards">
          {data.map((entry) => (
            <Tcard entry={entry} data={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial