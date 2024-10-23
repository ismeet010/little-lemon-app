import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import "./nav.css";

//pages
// import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import BookingPage from "./components/reservation/BookingPage";
import Ourstory from './components/About/Ourstory';
import Underconstruction from './components/Underconstruction';
import RightNav from './components/navbar/RightNav';
import Menu from './components/menu/Menu';

function App() {
  return (
    <BrowserRouter>
      {/* Link and NavLink are different as when we click on navlink it gets a class="active" in it */}
      {/* <Burger /> */}
      <RightNav />
      <main>
        <Routes>
          {/* index is same thing as path="/" */}
          <Route path="little-lemon-app" element={<Main />} />
          <Route path="little-lemon-app/about" element={<Ourstory />} />
          <Route
            path="little-lemon-app/reservation"
            element={<BookingPage />}
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
