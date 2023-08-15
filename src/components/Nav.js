import "../wspcl.css"
import Burger from "./Burger";
import logo from "../assets/logo.png";

function Nav() {
  return (
    
      <div className="max-width">
        <nav>
        <img src={logo} alt="logo" width={"200px"} height={"70px"}></img>
        <Burger />
        </nav>
      </div>
    
  );
}

export default Nav;