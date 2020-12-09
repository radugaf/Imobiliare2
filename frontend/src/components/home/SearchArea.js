import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

import { Collapse, Form } from "react-bootstrap";


const SearchArea = (props) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "$0+",
    bedrooms: "0+",
    home_type: "House",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "Any",
    has_photos: "1+",
    open_house: "false",
    keywords: "",
  });

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqft,
    days_listed,
    has_photos,
    open_house,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json"
      },

    };

    setLoading(true);
    axios
      .post(
        "http://localhost:8000/api/listings/search",
        {
          sale_type,
          price,
          bedrooms,
          home_type,
          bathrooms,
          sqft,
          days_listed,
          has_photos,
          open_house,
          keywords,
        },
        config
      )
      .then((res) => {
        setLoading(false);
        props.setListings(res.data);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

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
                  <Form onSubmit={(e) => onSubmit(e)}>
                    <h3 className="title pb-3">Let's Find Your Ideal Home</h3>
                    <div className="section-block"></div>
                    <div className="contact-form-action pt-3">
                      <Form.Group className="row">
                        <div className="col-lg-12">
                          <div className="input-box">
                            <Form.Label className="label-text">
                              Keywards
                            </Form.Label>
                            <div className="form-group">
                              <span className="la la-map-marker form-icon"></span>
                              <Form.Control
                                onChange={(e) => onChange(e)}
                                value={keywords}
                                className="form-control"
                                type="text"
                                name="keywords"
                                placeholder="Try by keywords"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-box">
                            <Form.Label className="label-text">
                              Home Type
                            </Form.Label>
                            <div className="form-group select-contain w-auto">
                              <Form.Control
                                name="sale_type"
                                onChange={(e) => onChange(e)}
                                value={sale_type}
                                as="select"
                                className="select-contain-select"
                              >
                                <option selected>For Sale</option>
                                <option>For Rent</option>
                              </Form.Control>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>

                    <Form.Group className="advanced-wrap">
                      <a
                        onClick={() => setOpen(!open)}
                        className="btn collapse-btn theme-btn-hover-gray font-size-15"
                        aria-expanded={open}
                        aria-controls="collapseTwo"
                      >
                        Advanced search
                        <i className="la la-angle-down ml-1"></i>
                      </a>
                      <Collapse in={open} className="pt-3">
                        <div className="row" id="collapseTwo">
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Home Type
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  onChange={(e) => onChange(e)}
                                  value={home_type}
                                  as="select"
                                  name="home_type"
                                  className="select-contain-select"
                                >
                                  <option selected>House</option>
                                  <option>Condo</option>
                                  <option>Townhouse</option>
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Sqft
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  name="sqft"
                                  onChange={(e) => onChange(e)}
                                  value={sqft}
                                  as="select"
                                  className="select-contain-select"
                                >
                                  <option>1000+</option>
                                  <option>1200+</option>
                                  <option>1500+</option>
                                  <option>2000+</option>
                                  <option selected>Any</option>
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Baths
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  name="bathrooms"
                                  onChange={(e) => onChange(e)}
                                  value={bathrooms}
                                  as="select"
                                  className="select-contain-select"
                                >
                                  <option selected>0+</option>
                                  <option>1+</option>
                                  <option>2+</option>
                                  <option>3+</option>
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Price
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  name="price"
                                  onChange={(e) => onChange(e)}
                                  value={price}
                                  as="select"
                                  className="select-contain-select"
                                >
                                  <option selected>Any</option>
                                  <option>$0+</option>
                                  <option>$200,000+</option>
                                  <option>$400,000+</option>
                                  <option>$600,000+</option>
                                  <option>$800,000+</option>
                                  <option>$1,000,000+</option>
                                  <option>$1,200,000+</option>
                                  <option>$1,400,000+</option>
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Days Listed
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  onChange={(e) => onChange(e)}
                                  value={days_listed}
                                  as="select"
                                  name="days_listed"
                                  className="select-contain-select"
                                >
                                  <option>1 or less</option>
                                  <option>2 or less</option>
                                  <option>5 or less</option>
                                  <option>5 or less</option>
                                  <option>5 or less</option>
                                  <option>10 or less</option>
                                  <option>20 or less</option>
                                  <option>Any</option>
                                  
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Bedrooms
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  onChange={(e) => onChange(e)}
                                  value={bedrooms}
                                  as="select"
                                  name="bedrooms"
                                  className="select-contain-select"
                                >
                                  <option>0+</option>
                                  <option>1+</option>
                                  <option>2+</option>
                                  <option>3+</option>
                                  <option>4+</option>
                                  <option>5+</option>
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-box">
                              <Form.Label className="label-text">
                                Has Photos
                              </Form.Label>
                              <div className="form-group select-contain w-auto">
                                <Form.Control
                                  onChange={(e) => onChange(e)}
                                  value={has_photos}
                                  as="select"
                                  name="has_photos"
                                  className="select-contain-select"
                                >
                                  <option selected>1+</option>
                                  <option>3+</option>
                                  <option>5+</option>
                                  <option>10+</option>
                                  <option>15+</option>
                                </Form.Control>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="input-box">
                              <div class="form-group">
                                <div class="custom-checkbox">
                                  <input
                                    name="open_house"
                                    type="checkbox"
                                    onChange={(e) => onChange(e)}
                                    value={open_house}
                                    id="agreeChb"
                                  />
                                  <label for="agreeChb">
                                    Open House
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </Form.Group>

                    <div className="btn-box pt-3">
                      {loading ? (
                        <div className="listingform__loader">
                          <Loader
                            type="Oval"
                            color="#424242"
                            height={50}
                            width={50}
                          />
                        </div>
                      ) : (
                        <button className="theme-btn">Search Now</button>
                      )}
                    </div>
                  </Form>
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

SearchArea.propTypes = {
  setListings: PropTypes.func.isRequired,
};

export default SearchArea;
