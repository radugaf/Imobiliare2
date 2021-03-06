import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <>
      <section className="listing-form section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">
                    <i className="la la-user mr-2 text-gray"></i>Login
                  </h3>
                </div>
                <div className="form-content contact-form-action">
                  <form
                    method="post"
                    className="row"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div className="col-lg-12 responsive-column">
                      <div className="input-box">
                        <label className="label-text">Your Email</label>
                        <div className="form-group">
                          <span className="la la-envelope-o form-icon"></span>
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 responsive-column">
                      <div className="input-box">
                        <label className="label-text">Password</label>
                        <div className="form-group">
                          <span className="la la-key form-icon"></span>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 responsive-column">
                      <div className="btn-box pt-3 pb-3">
                        <button className="theme-btn w-100">Register</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
