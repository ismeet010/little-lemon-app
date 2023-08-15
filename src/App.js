import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import logo from "./assets/logo.png";

//pages
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Burger from './components/Burger';
import Reservation from './components/Reservation';
import Ourstory from './components/Ourstory';
import Underconstruction from './components/Underconstruction';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <img src={logo} alt="logo" width={"200px"} height={"70px"}></img>
          {/* Link and NavLink are different as when we click on navlink it gets a class="active" in it */}
          <Burger />
        </nav>
      </header>
      <main>
        <Routes>
          {/* index is same thing as path="/" */}
          <Route path="/" element={<Main />} />
          <Route path="about" element={<Ourstory />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path='login' element={<Underconstruction />} />
          <Route path='menu' element={<Underconstruction />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    // <>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </>
  );
}

export default App;
