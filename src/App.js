import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// import "./nav.css";

//pages
// import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Burger from './components/Burger';
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
          <Route path="/" element={<Main />} />
          <Route path="about" element={<Ourstory />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="login" element={<Underconstruction />} />
          <Route path="menu" element={<Menu />} />
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
