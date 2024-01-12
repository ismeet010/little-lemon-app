import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className="flex-column menu-div">
      <h2 className="menu-heading">Menu</h2>
      <section className="flex-row menu">
        <div className="menu-col-1">
          <h3 className='menu-h3'>Tacos</h3>
          <MenuItem />
        </div>
        <div className="menu-col-2">
            <h3 className='menu-h3'>Burritos</h3>
          <MenuItem />
        </div>
      </section>
    </div>
  );
}

export default Menu