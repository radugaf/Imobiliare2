import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout, login } from "../actions/auth";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);

  const authLinks = (
    <Link className="theme-btn theme-btn-small" onClick={logout} href="#!">
      Logout
    </Link>
  );

  const guestLinks = (
    <Fragment>
      <div className="header-right-action">
        <Button
          onClick={() => setSignupShow(true)}
          className="theme-btn theme-btn-small theme-btn-transparent mr-1"
        >
          Sign Up
        </Button>
        <Button onClick={() => setLoginShow(true)} className="theme-btn theme-btn-small">
          Login
        </Button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <header className="header-area">
        <div className="header-top-bar padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="header-top-content">
                  <div className="header-left">
                    <ul className="list-items">
                      <li>
                        <a href="#">
                          <i className="la la-phone mr-1"></i> (+40)722.101.097
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="la la-envelope mr-1"></i>
                          radugaf@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-top-content">
                  <div className="header-right d-flex align-items-center justify-content-end">
                    {!loading && (
                      <Fragment>
                        {isAuthenticated ? authLinks : guestLinks}
                      </Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu-wrapper padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="menu-wrapper">
                  <a href="#" className="down-button">
                    <i className="la la-angle-down"></i>
                  </a>
                  <div className="logo">
                    <Link to="/">
                      <img src="#" alt="logo" />
                    </Link>
                    <div className="menu-toggler">
                      <i className="la la-bars"></i>
                      <i className="la la-times"></i>
                    </div>
                  </div>

                  <div className="main-menu-content">
                    <nav>
                      <ul>
                        <li>
                          <a href="#">
                            Vanzari <i className="la la-angle-down"></i>
                          </a>
                          <ul className="dropdown-menu-item">
                            <li>
                              <a href="index6.html">Home - Flight</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">
                            Tour <i className="la la-angle-down"></i>
                          </a>
                          <ul className="dropdown-menu-item">
                            <li>
                              <a href="tour-fullwidth.html">Tour Full width</a>
                            </li>
                            <li>
                              <a href="tour-grid.html">Tour Grid</a>
                            </li>
                            <li>
                              <a href="tour-list.html">Tour List</a>
                            </li>
                            <li>
                              <a href="tour-left-sidebar.html">
                                Tour Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="tour-right-sidebar.html">
                                Tour Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="tour-details.html">Tour details</a>
                            </li>
                            <li>
                              <a href="tour-booking.html">Tour Booking</a>
                            </li>
                            <li>
                              <a href="tour-search-result.html">
                                Tour Search Result
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">
                            Cruise <i className="la la-angle-down"></i>
                          </a>
                          <ul className="dropdown-menu-item">
                            <li>
                              <a href="cruises.html">Cruises</a>
                            </li>
                            <li>
                              <a href="cruises-list.html">Cruise list</a>
                            </li>
                            <li>
                              <a href="cruise-sidebar.html">Cruise Sidebar</a>
                            </li>
                            <li>
                              <a href="cruise-details.html">Cruise details</a>
                            </li>
                            <li>
                              <a href="cruise-booking.html">Cruise Booking</a>
                            </li>
                            <li>
                              <a href="cruise-search-result.html">
                                Cruise Search Result
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">
                            Pages <i className="la la-angle-down"></i>
                          </a>
                          <div className="dropdown-menu-item mega-menu">
                            <ul className="row no-gutters">
                              <li className="col-lg-3 mega-menu-item">
                                <ul>
                                  <li>
                                    <a href="add-hotel.html">
                                      add hotel
                                      <span className="badge bg-2 text-white">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="add-flight.html">
                                      add flight
                                      <span className="badge bg-2 text-white">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="add-tour.html">
                                      add tour
                                      <span className="badge bg-2 text-white">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="add-cruise.html">
                                      add cruise
                                      <span className="badge bg-2 text-white">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="add-car.html">
                                      add car
                                      <span className="badge bg-2 text-white">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="user-dashboard.html">
                                      User Dashboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="admin-dashboard.html">
                                      Admin Dashboard
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="col-lg-3 mega-menu-item">
                                <ul>
                                  <li>
                                    <a href="user-profile.html">User profile</a>
                                  </li>
                                  <li>
                                    <a href="become-local-expert.html">
                                      Become Local Expert
                                    </a>
                                  </li>
                                  <li>
                                    <a href="contact.html">contact</a>
                                  </li>
                                  <li>
                                    <a href="cart.html">Cart</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="recover.html">recover password</a>
                                  </li>
                                  <li>
                                    <a href="payment-received.html">
                                      payment received
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="col-lg-3 mega-menu-item">
                                <ul>
                                  <li>
                                    <a href="payment-complete.html">
                                      payment complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="destinations.html">Destinations</a>
                                  </li>
                                  <li>
                                    <a href="about.html">about</a>
                                  </li>
                                  <li>
                                    <a href="services.html">Our Services</a>
                                  </li>
                                  <li>
                                    <a href="gallery.html">Gallery</a>
                                  </li>
                                  <li>
                                    <a href="pricing.html">pricing</a>
                                  </li>
                                  <li>
                                    <a href="faq.html">faq</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="col-lg-3 mega-menu-item">
                                <ul>
                                  <li>
                                    <a href="add-new-post.html">
                                      add new post
                                      <span className="badge bg-2 text-white">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-full-width.html">
                                      blog full width
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-grid.html">blog grid</a>
                                  </li>
                                  <li>
                                    <a href="blog-sidebar.html">blog sidebar</a>
                                  </li>
                                  <li>
                                    <a href="blog-single.html">blog details</a>
                                  </li>
                                  <li>
                                    <a href="coming-soon.html">Coming Soon</a>
                                  </li>
                                  <li>
                                    <a href="page-404.html">404 page</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="nav-btn">
                    <a href="become-local-expert.html" className="theme-btn">
                      Become Local Expert
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Modal className="modal-popup" show={signupShow} onHide={() => setSignupShow(false)}>
        <Modal.Header closeButton>
          <div>
            <h5 className="modal-title title" id="exampleModalLongTitle">
              Sign Up
            </h5>
            <p className="font-size-14">Hello! Welcome Create a New Account</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="contact-form-action">
            <form method="post">
              <div className="input-box">
                <label className="label-text">Username</label>
                <div className="form-group">
                  <span className="la la-user form-icon"></span>
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Type your username"
                  />
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Email Address</label>
                <div className="form-group">
                  <span className="la la-envelope form-icon"></span>
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Type your email"
                  />
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Password</label>
                <div className="form-group">
                  <span className="la la-lock form-icon"></span>
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Type password"
                  />
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Repeat Password</label>
                <div className="form-group">
                  <span className="la la-lock form-icon"></span>
                  <input
                    className="form-control"
                    type="text"
                    name="text"
                    placeholder="Type again password"
                  />
                </div>
              </div>
              <div className="btn-box pt-3 pb-4">
                <button type="button" className="theme-btn w-100">
                  Register Account
                </button>
              </div>
              <div className="action-box text-center">
                <p className="font-size-14">Or Sign up Using</p>
                <ul className="social-profile py-3">
                  <li>
                    <a href="#" className="bg-5 text-white">
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-6 text-white">
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-7 text-white">
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-5 text-white">
                      <i className="lab la-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal className="modal-popup" show={loginShow} onHide={() => setLoginShow(false)}>
        <Modal.Header closeButton>
          <div>
            <h5 className="modal-title title" id="exampleModalLongTitle2">
              Login
            </h5>
            <p className="font-size-14">Hello! Welcome to your account</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="contact-form-action">
            <form  onSubmit={e => onSubmit(e)}>
              <div className="input-box">
                <label className="label-text">Email</label>
                <div className="form-group">
                  <span className="la la-user form-icon"></span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="input-box">
                <label className="label-text">Password</label>
                <div className="form-group mb-2">
                  <span className="la la-lock form-icon"></span>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    value={password}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="custom-checkbox mb-0">
                    <input type="checkbox" id="rememberchb" />
                    <label for="rememberchb">Remember me</label>
                  </div>
                  <p className="forgot-password">
                    <a href="recover.html">Forgot Password?</a>
                  </p>
                </div>
              </div>
              <div className="btn-box pt-3 pb-4">
                <button type="button" className="theme-btn w-100">
                  Login Account
                </button>
              </div>
              <div className="action-box text-center">
                <p className="font-size-14">Or Login Using</p>
                <ul className="social-profile py-3">
                  <li>
                    <a href="#" className="bg-5 text-white">
                      <i className="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-6 text-white">
                      <i className="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-7 text-white">
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-5 text-white">
                      <i className="lab la-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
