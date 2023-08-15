import React from 'react'

const Spclcard = ({entry}) => {
  return (
    <div>
      <div className="scard">
        <div className="image-box">
          <img
            src={entry.imgsrc}
            alt={entry.imgalt}
          />
        </div>

        <h4>{entry.name}</h4>
        <h4>{entry.price}</h4>
        <p>{entry.description}</p>
        <p>Order now..</p>
      </div>
    </div>
  );
}

export default Spclcard