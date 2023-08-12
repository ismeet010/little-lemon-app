import "../nav.css";
import Burger from "./Burger";
import logo from "../assets/logo.png";

function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" width={"200px"} height={"70px"}></img>
      <Burger />
    </nav>
  );
}

export default Nav;