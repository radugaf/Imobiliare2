import React, { Fragment, useState } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout, login } from "../actions/auth";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Link className="theme-btn theme-btn-small" onClick={logout} href="#!">
      Logout
    </Link>
  );

  const guestLinks = (
    <Fragment>
      <div className="header-right-action">
        <Link
          to="/signup"
          className="theme-btn theme-btn-small theme-btn-transparent mr-1"
        >
          Sign Up
        </Link>
        <Link to="/login" className="theme-btn theme-btn-small">
          Login
        </Link>
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
