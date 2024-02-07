import RevLogoImage from "../assets/img/RevoltutionLabs-Logo.svg"

const Footer = () => {
    return(
        <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6  footer-info">
            <img src={{RevLogoImage}}  style={{textAlign:"center"}} width="100%" alt="revoltution logo" />
            <p>We offer support to startups during their early, risky stages when they need it most. Our incubator program provides everything these driven entrepreneurs need to succeed, including resources, capital, and expert insights.</p>
          </div>

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
               <li><i class="bi bi-chevron-right scrollto"></i> <a href="#hero">Home</a></li>
              <li><i class="bi bi-chevron-right scrollto"></i> <a href="#about">About</a></li>
              <li><i class="bi bi-chevron-right scrollto"></i> <a href="#supporters">Investor</a></li>
              <li><i class="bi bi-chevron-right scrollto"></i> <a href="#contact">Contact</a></li>
            </ul>
          </div>


          <div class="col-lg-4 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <span> <p> <i class="bi bi-geo-alt"></i> &nbsp; #4324 Mapleshade Ln. Suite 281, Plano, TX 75093.<br />
              <i class="bi bi-geo-alt"></i> &nbsp; No. 3, 12th Main, Off Palace Road, Vasanthanagar, Bengaluru, KA 560001.</p> 
            
            <i class="bi bi-phone"></i> &nbsp; +1 800 232 5130<br /><br/>
            <i class="bi bi-envelope"></i> &nbsp;  success@revoltution.com<br />
            </span>
            <br />
            <div class="social-links">
              <a href="https://twitter.com/Revoltutionlabs" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/Revoltutionlabs" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/myrevoltution/" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/revoltution" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright"><strong>Revoltution</strong>  &copy; 2024 Copyright  |  All Rights Reserved
      </div>
    </div>
  </footer>

    )
}

export default Footer;