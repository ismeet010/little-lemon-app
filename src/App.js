import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import "./nav.css";

//pages
// import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import Ourstory from './components/Ourstory';
import Underconstruction from './components/Underconstruction';
import RightNav from './components/RightNav';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <header>
        {/* Link and NavLink are different as when we click on navlink it gets a class="active" in it */}
        {/* <Burger /> */}
        <RightNav />
      </header>
      <main>
        <Routes>
          {/* index is same thing as path="/" */}
          <Route path="little-lemon-app" element={<Main />} />
          <Route path="little-lemon-app/about" element={<Ourstory />} />
          <Route
            path="little-lemon-app/reservation"
            element={<Reservation />}
          />
          <Route
            path="little-lemon-app/login"
            element={<Underconstruction />}
          />
          <Route path="little-lemon-app/menu" element={<Menu />} />
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
