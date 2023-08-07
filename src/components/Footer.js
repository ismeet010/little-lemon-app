import '../footer.css'
import 'https://kit.fontawesome.com/c4254e24a8.js'

function Footer() {
  return (
    <footer class="footer">
      <div class="col-1">
        <h3>Useful links</h3>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
      </div>
      <div class="col-2">
        <h3>Contact us</h3>
        <p>address...India</p>
      </div>
      <div class="col-3">
        <h3>Connect with us</h3>
        <div class="social-icons">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;