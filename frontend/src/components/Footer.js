import React from "react";

const Footer = () => {
  return (
    <section className="footer-area section-bg padding-top-100px padding-bottom-30px">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <div className="footer-logo padding-bottom-30px">
                <a href="index.html" className="foot__logo">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>
              <p className="footer__desc">
                Morbi convallis bibendum urna ut viverra. Maecenas consequat
              </p>
              <ul className="list-items pt-3">
                <li>
                  3015 Grand Ave, Coconut Grove,
                  <br /> Cerrick Way, FL 12345
                </li>
                <li>+123-456-789</li>
                <li>
                  <a href="#">trizen@yourwebsite.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4
                className="title curve-shape pb-3 margin-bottom-20px"
                data-text="curvs"
              >
                Company
              </h4>
              <ul className="list-items list--items">
                <li>
                  <a href="about.html">Despre Noi</a>
                </li>
                <li>
                  <a href="services.html">Servicii</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="blog-grid.html">News</a>
                </li>
                <li>
                  <a href="contact.html">Support</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4
                className="title curve-shape pb-3 margin-bottom-20px"
                data-text="curvs"
              >
                Pentru Proprietari
              </h4>
              <ul className="list-items list--items">
                <li>
                  <a href="#">Intra in cont</a>
                </li>
                <li>
                  <a href="#">Adauga anunt</a>
                </li>
                <li>
                  <a href="#">Alege Agentie</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4
                className="title curve-shape pb-3 margin-bottom-20px"
                data-text="curvs"
              >
                Subscribe now
              </h4>
              <p className="footer__desc pb-3">
                Subscribe for latest updates & promotions
              </p>
              <div className="contact-form-action">
                <form action="#">
                  <div className="input-box">
                    <label className="label-text">Enter email address</label>
                    <div className="form-group mb-0">
                      <span className="la la-envelope form-icon"></span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                      <button
                        className="theme-btn theme-btn-small submit-btn"
                        type="submit"
                      >
                        Go
                      </button>
                      <span className="font-size-14 pt-1">
                        <i className="la la-lock mr-1"></i>Your information is safe
                        with us.
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="term-box footer-item">
              <ul className="list-items list--items d-flex align-items-center">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-social-box text-right">
              <ul className="social-profile">
                <li>
                  <a href="#">
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lab la-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-block mt-4"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="copy-right padding-top-30px">
              <p className="copy__desc">
                &copy; Copyright Protocol 2020. Made with
                <span className="la la-heart"> love</span> by 
                <a href="https://themeforest.net/user/techydevs/portfolio">
                  {" "}Radu Gafita
                </a>
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Footer;
