import React from "react";

const SearchArea = () => {
  return (
    <section className="hero-wrapper hero-wrapper4">
      <div className="hero-box hero-bg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-content mt-0">
                <div className="section-heading">
                  <h2 className="sec__title">
                    Find the Best Car that <br />
                    Fits Your Needs
                  </h2>
                  <p className="sec__desc pt-3 font-size-18">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                  </p>
                </div>
              </div>

              <div className="hero-list-box margin-top-40px">
                <ul className="list-items">
                  <li className="d-flex align-items-center">
                    <span>Free Cancellations</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span>No Credit Card Fees</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="search-fields-container search-fields-container-shape">
                <div className="search-fields-container-inner">
                  <h3 className="title pb-3">Let's Find Your Ideal Home</h3>
                  <div className="section-block"></div>
                  <div className="contact-form-action pt-3">
                    <form action="#" className="row">
                      <div className="col-lg-12">
                        <div className="input-box">
                          <label className="label-text">Pick-up Location</label>
                          <div className="form-group">
                            <span className="la la-map-marker form-icon"></span>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="City, airport, station or address"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="advanced-wrap">
                    <a
                      className="btn collapse-btn theme-btn-hover-gray font-size-15"
                      data-toggle="collapse"
                      href="#collapseTwo"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Advanced options <i className="la la-angle-down ml-1"></i>
                    </a>
                    <div className="pt-3 collapse" id="collapseTwo">
                      <div className="row">
                        <div className="col-lg-6 pr-0">
                          <div className="input-box">
                            <label className="label-text">Car type</label>
                            <div className="form-group">
                              <div className="select-contain select-contain-shadow w-auto">
                                <select className="select-contain-select">
                                  <option value="1">No preference</option>
                                  <option value="2">Economy</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Rental car company</label>
                            <div className="form-group">
                              <div className="select-contain select-contain-shadow w-auto">
                                <select className="select-contain-select">
                                  <option value="">No preference</option>
                                  <option value="AC">ACE Rent A Car</option>
                                  <option value="AD">
                                    Advantage Rent-A-Car
                                  </option>
                                  <option value="AL">Alamo Rent A Car</option>
                                  <option value="ZI">Avis</option>

                                  <option value="ZL">
                                    National Car Rental
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Discount code</label>
                            <div className="form-group">
                              <div className="select-contain select-contain-shadow w-auto">
                                <select className="select-contain-select">
                                  <option value="0">I don't have a code</option>
                                  <option value="1">
                                    Corporate or contracted
                                  </option>
                                  <option value="2">
                                    Special or advertised
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box pt-3">
                    <a href="car-search-result.html" className="theme-btn">
                      Search Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="hero-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <polygon points="100 10 100 0 0 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default SearchArea;
