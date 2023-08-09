import React, {useState, useEffect} from 'react'
import RightNav from './RightNav';

const Burger = () => {
    const [open, setOpen] = useState(true);
    const [className, setClassName] = useState("hidden")
    useEffect( ()=>{
        console.log("open", open)
        open ? setClassName("show") : setClassName("hidden")
        console.log("here")
        const bur = document.getElementById("burger")
        const ul = document.getElementById("menu")
        console.log(ul)
        bur.className = className
        ul.className =className
        console.log(bur.classList)
    }, [open]

    )
  return (
    <>
      <div id="burger" className="hidden" onClick={() => setOpen(!open)}>
        <div className="b" />
        <div className="b" />
        <div className="b" />
      </div>
      <RightNav open={open} />
    </>
  );
}

export default Burger