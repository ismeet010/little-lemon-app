import '../footer.css'
import 'https://kit.fontawesome.com/c4254e24a8.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="col-1">logo</div>
      <div className="col-1">
        <h3>Useful links</h3>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
      </div>
      <div className="col-2">
        <h3>Contact us</h3>
        <p>address...India</p>
      </div>
      <div className="col-3">
        <h3>Connect with us</h3>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;