import introImage from "../intro-image.jpg";
import person from "../person.jpg";
import chef from "../chef.jpg";
import Section from "../../components/Section";
import logo1 from "../logo-footer.png";
import navLogo from "../logo.png";

export const DATA = [
    {
      id : "nav-logo",
      content: <img src={navLogo} width={"250px"} alt="logo"></img>
    },
    {
      id : "nav-links",
      content : 
      <>
        <a className = "nav-links" href="#">Home</a>
        <a className = "nav-links" href="#about">About</a>
        <a className = "nav-links" href="#menu">Menu</a>
        <a className = "nav-links" href="#reservations">Reservations</a>
        <a className = "nav-links" href="#order">Order online</a>
        <a className = "nav-links" href="#login">Login</a>
      </>
    },
    {
      id : "intro-text",
      content : <><h1 className = "font-yellow">Little Lemon</h1><h2 className = "font-white">Chicago</h2><p className = "font-white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p><button class="button-primary" href="/bookings">Reserve a table</button></>
    },
    {
      id : "intro-image",
      content : <><img class="hero-image" src={introImage} alt="Restaurant food" /></>
    },
    {
      id: "week-special-header",
      content : <><h2>This week specials!</h2><button class="button-primary" href="/order-online">Online Menu</button></>
    },
    {
      id : "week-specials",
      content : [
        <>
          <img class="meal-card-image" src={introImage} alt="Restaurant food" />
          <h3>Greek Salad</h3>
          <span>$12.99</span>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <a class = "order-button">Order a Delivery</a>
        </>,
        <>
          <img class="meal-card-image" src={introImage} alt="Restaurant food" />
          <h3>Greek Salad</h3>
          <span>$12.99</span>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <a class = "order-button">Order a Delivery</a>
        </>,
        <>
          <img class="meal-card-image" src={introImage} alt="Restaurant food" />
          <h3>Greek Salad</h3>
          <span>$12.99</span>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <a class = "order-button">Order a Delivery</a>
        </>,
      ]
    },
    {
      id : "testimonial-header",
      content:<h1>What people say about us!</h1>
    },
    {
      id : "testimonials",
      content : [
        <>
          <img src={person} alt="Maria Sanchez"></img>
          <h4>Maria Sanchez</h4>
          <blockquote><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua."</p></blockquote>
        </>,
        <>
        <img src={person} alt="Maria Sanchez"></img>
        <h4>Maria Sanchez</h4>
        <blockquote><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua."</p></blockquote>
       </>,
        <>
        <img src={person} alt="Maria Sanchez"></img>
        <h4>Maria Sanchez</h4>
        <blockquote><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua."</p></blockquote>
        </>,
        <>
        <img src={person} alt="Maria Sanchez"></img>
        <h4>Maria Sanchez</h4>
        <blockquote><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua."</p></blockquote>
        </>,
      ]
    },
    {
      id : "about",
      content : [
        <Section width = {400} isVertical = {true} content = {
          <>
            <h1 className = "font-yellow">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </>
          }
        />,
        <Section isVertical = {true} content = {
          <>
            <Section content = {<img src={chef} className= {"chef-image"} alt="Maria Sanchez"></img>} />
            <Section content = {<img src={chef} className= {"chef-image"} alt="Maria Sanchez"></img>} /> 
          </>
        } />
      ]
    },
    {
      id :"footer-logo",
      content:<img src={logo1} alt="logo" width="80px" />
    },
    {
      id:"nav-useful-links",
      content:
      <>
        <h3>Useful links</h3>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
      </>
    },
    {
      id:"nav-contact",
      content: 
      <>
        <h3>Contact us</h3>
        <p>India</p>
      </>
    },
    {
      id:"nav-connect",
      content: 
      <>
        <h3>Connect with us</h3>
        <Section width = {100} content = {
          <>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </>
        } />
      </>
    }


  ]