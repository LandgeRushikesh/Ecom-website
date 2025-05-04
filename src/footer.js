export const addingFooter = () => {
    let footerHTML = `<div class="footer-first">
            <div class="First">
              <img src="/favicon.png" alt="logo">
              <p>Welcome to ClickCart EcomStore, your ultimate destination for cutting-edge gadgets!
              </p>
              <div class="social">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
            <div class="Second">
              <h3>shopping</h3>
              <div class="col">
                <a href="#">Computer Store</a>
                <a href="#">Laptop Store</a>
                <a href="#">Accessories</a>
                <a href="#">Sales & Discount</a>
              </div>
            </div>
            <div class="Third">
              <h3>Experience</h3>
              <div class="col">
                <a href="#">Contact us</a>
                <a href="#">payment Method</a>
                <a href="#">Delivery</a>
                <a href="#">Return & Exchange</a>
              </div>
            </div>
            <div class="Fourth">
              <h3>NewsLetter</h3>
              <p>Be the first to know about new arrivals, sales & promos!</p>
              <input type="email" placeholder="Enter your Email">
            </div>
          </div>
          <div class="separation">
          </div>
          <div class="footer-second">
            <p>&copy; 2025 ClickCart | All rights reserved.</p>
          </div>`

    document.querySelector(".footer-section").insertAdjacentHTML("afterbegin", footerHTML)
}