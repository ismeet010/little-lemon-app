import React from 'react'

const Spclcard = ({entry}) => {
  return (
    <div>
      <div className="scard space-between">
        <div className="image-box">
          <img src={entry.imgsrc} alt={entry.imgalt} />
        </div>
        <div className='flex-column space-evenly'>
          <div className="flex-row space-between">
            <h4>{entry.name}</h4>
            <h4 className="price">{entry.price}</h4>
          </div>
          <p className="splcard-description">{entry.description}</p>
          <p>Order now..</p>
        </div>
      </div>
    </div>
  );
}

export default Spclcard