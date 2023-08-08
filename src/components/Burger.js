import React, {useState} from 'react'

const Burger = () => {
    const [open, setOpen] = useState(false);
    console.log("burger");
  return (
    <div className="burger" open={open} onClick={() => setOpen(!open)}>
        <div className="b"/>
        <div className="b"/>
        <div className="b"/>
    </div>
  )
}

export default Burger