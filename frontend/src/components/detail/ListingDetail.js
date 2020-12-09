import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";

const ListingDetail = (props) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
 
  useEffect(() => {
    const slug = props.match.params.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:8000/api/listings/${slug}`, config)
      .then((res) => {
        setListing(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {});
  }, [props.match.params.id]);

  useEffect(() => {
    const id = listing.realtor;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://localhost:8000/api/realtors/${id}`, config)
        .then((res) => {
          setRealtor(res.data);
        })
        .catch((err) => {});
    }
  }, [listing.realtor]);

  const displayInteriorImages = () => {
    let images = [];

    images.push(
      <div key={1} id="photo" class="page-scroll">
        <div class="single-content-item padding-top-40px padding-bottom-40px">
          <h3 class="title font-size-20">Photo</h3>
          <div class="gallery-carousel carousel-action padding-top-30px">
            <div class="card-item mb-0">
              {listing.photo_1 ? (
                <div class="card-img">
                  <img src={listing.photo_1} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_2 ? (
                <div class="card-img">
                  <img src={listing.photo_2} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_3 ? (
                <div class="card-img">
                  <img src={listing.photo_3} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_4 ? (
                <div class="card-img">
                  <img src={listing.photo_4} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_5 ? (
                <div class="card-img">
                  <img src={listing.photo_5} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_6 ? (
                <div class="card-img">
                  <img src={listing.photo_6} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_7 ? (
                <div class="card-img">
                  <img src={listing.photo_7} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_8 ? (
                <div class="card-img">
                  <img src={listing.photo_8} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_9 ? (
                <div class="card-img">
                  <img src={listing.photo_9} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_10 ? (
                <div class="card-img">
                  <img src={listing.photo_10} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_11 ? (
                <div class="card-img">
                  <img src={listing.photo_11} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_12 ? (
                <div class="card-img">
                  <img src={listing.photo_12} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_13 ? (
                <div class="card-img">
                  <img src={listing.photo_13} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_14 ? (
                <div class="card-img">
                  <img src={listing.photo_14} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_15 ? (
                <div class="card-img">
                  <img src={listing.photo_15} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_16 ? (
                <div class="card-img">
                  <img src={listing.photo_16} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_17 ? (
                <div class="card-img">
                  <img src={listing.photo_17} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_18 ? (
                <div class="card-img">
                  <img src={listing.photo_18} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_19 ? (
                <div class="card-img">
                  <img src={listing.photo_19} alt="" />
                </div>
              ) : null}
            </div>
            <div class="card-item mb-0">
              {listing.photo_20 ? (
                <div class="card-img">
                  <img src={listing.photo_20} alt="" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );

    return images;
  };

  return (
    <div>
      <BreadCrumb />

      <section class="tour-detail-area padding-bottom-90px">
        <div
          class="single-content-navbar-wrap menu section-bg"
          id="single-content-navbar"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="single-content-nav" id="single-content-nav">
                  <ul>
                    <li>
                      <a
                        data-scroll="description"
                        href="#description"
                        class="scroll-link active"
                      >
                        Description
                      </a>
                    </li>
                    <li>
                      <a
                        data-scroll="itinerary"
                        href="#itinerary"
                        class="scroll-link"
                      >
                        Itinerary
                      </a>
                    </li>
                    <li>
                      <a data-scroll="photo" href="#photo" class="scroll-link">
                        Photo
                      </a>
                    </li>
                    <li>
                      <a data-scroll="faq" href="#faq" class="scroll-link">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        data-scroll="location-map"
                        href="#location-map"
                        class="scroll-link"
                      >
                        Map
                      </a>
                    </li>
                    <li>
                      <a
                        data-scroll="reviews"
                        href="#reviews"
                        class="scroll-link"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="single-content-box">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="single-content-wrap padding-top-60px">
                  <div id="description" class="page-scroll">
                    <div class="single-content-item pb-4">
                      <h3 class="title font-size-26">
                        3 Days Tour: the Great Wall of China
                      </h3>
                      <div class="d-flex flex-wrap align-items-center pt-2">
                        <p class="mr-2">Huairou District, China</p>
                        <p>
                          <span class="badge badge-warning text-white font-size-16">
                            4.6
                          </span>
                          <span>(4,209 Reviews)</span>
                        </p>
                      </div>
                    </div>
                    <div class="section-block"></div>
                    <div class="single-content-item py-4">
                      <div class="row">
                        <div class="col-lg-4 responsive-column">
                          <div class="single-tour-feature d-flex align-items-center mb-3">
                            <div class="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i class="la la-clock-o"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Duration
                              </h3>
                              <span class="font-size-13">3 Days</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                          <div class="single-tour-feature d-flex align-items-center mb-3">
                            <div class="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i class="la la-users"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Group Size
                              </h3>
                              <span class="font-size-13">30 People</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                          <div class="single-tour-feature d-flex align-items-center mb-3">
                            <div class="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i class="la la-globe"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Tour Type
                              </h3>
                              <span class="font-size-13">Adventures Tour</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                          <div class="single-tour-feature d-flex align-items-center mb-3">
                            <div class="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i class="la la-calendar"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Date
                              </h3>
                              <span class="font-size-13">
                                Jan 19' - Dec 21'
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                          <div class="single-tour-feature d-flex align-items-center mb-3">
                            <div class="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i class="la la-user"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Min Age
                              </h3>
                              <span class="font-size-13">10+</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                          <div class="single-tour-feature d-flex align-items-center mb-3">
                            <div class="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i class="la la-plane"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Pickup From
                              </h3>
                              <span class="font-size-13">Airport</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="section-block"></div>
                    
                    <div class="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 class="title font-size-20">Description</h3>
                      <p class="py-3">
                        {listing.description}
                      </p>
                      
                      <h3 class="title font-size-15 font-weight-medium pb-3">
                        Highlights
                      </h3>
                      <div class="row">
                        <div class="col-lg-6 responsive-column">
                          <ul class="list-items pb-3">
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Dolorem mediocritatem
                            </li>
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Mea appareat
                            </li>
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Prima causae
                            </li>
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Singulis indoctum
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <ul class="list-items pb-3">
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Timeam inimicus
                            </li>
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Oportere democritum
                            </li>
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Cetero inermis
                            </li>
                            <li>
                              <i class="la la-dot-circle text-color mr-2"></i>
                              Pertinacia eum
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 responsive-column">
                          <h3 class="title font-size-15 font-weight-medium pb-3">
                            Included
                          </h3>
                          <ul class="list-items">
                            <li>
                              <i class="la la-check text-success mr-2"></i>
                              Airfare
                            </li>
                            <li>
                              <i class="la la-check text-success mr-2"></i>Local
                              Transportation
                            </li>
                            <li>
                              <i class="la la-check text-success mr-2"></i>
                              Accommodation
                            </li>
                            <li>
                              <i class="la la-check text-success mr-2"></i>Tour
                              Guide
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <h3 class="title font-size-15 font-weight-medium pb-3">
                            Not Included
                          </h3>
                          <ul class="list-items">
                            <li>
                              <i class="la la-times text-danger mr-2"></i>
                              Entrance Fees
                            </li>
                            <li>
                              <i class="la la-times text-danger mr-2"></i>Guide
                              Gratuity
                            </li>
                            <li>
                              <i class="la la-times text-danger mr-2"></i>Lunch
                            </li>
                            <li>
                              <i class="la la-times text-danger mr-2"></i>Dinner
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="section-block"></div>
                  </div>

                  {displayInteriorImages()}
                
                </div>
              </div>
              <div class="col-lg-4">
                <div class="sidebar single-content-sidebar mb-0">
                  <div class="sidebar-widget single-content-widget">
                    <div class="sidebar-widget-item">
                      <div class="sidebar-book-title-wrap mb-3">
                        <h3>Bestseller</h3>
                        <p>
                          <span class="text-form">From</span>
                          <span class="text-value ml-2 mr-1">$399.00</span>{" "}
                          <span class="before-price">$412.00</span>
                        </p>
                      </div>
                    </div>
                    <div class="sidebar-widget-item">
                      <div class="contact-form-action">
                        <form action="#">
                          <div class="input-box">
                            <label class="label-text">Date</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <input
                                class="date-range form-control"
                                type="text"
                                name="daterange"
                                value="04/28/2020"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="sidebar-widget-item">
                      <div class="qty-box mb-2 d-flex align-items-center justify-content-between">
                        <label class="font-size-16">
                          Adults <span>Age 18+</span>
                        </label>
                        <div class="qtyBtn d-flex align-items-center">
                          <input type="text" name="qtyInput" value="0" />
                        </div>
                      </div>
                      <div class="qty-box mb-2 d-flex align-items-center justify-content-between">
                        <label class="font-size-16">
                          Children <span>2-12 years old</span>
                        </label>
                        <div class="qtyBtn d-flex align-items-center">
                          <input type="text" name="qtyInput" value="0" />
                        </div>
                      </div>
                      <div class="qty-box mb-2 d-flex align-items-center justify-content-between">
                        <label class="font-size-16">
                          Infants <span>0-2 years old</span>
                        </label>
                        <div class="qtyBtn d-flex align-items-center">
                          <input type="text" name="qtyInput" value="0" />
                        </div>
                      </div>
                    </div>
                    <div class="btn-box pt-2">
                      <a
                        href="tour-booking.html"
                        class="theme-btn text-center w-100 mb-2"
                      >
                        <i class="la la-shopping-cart mr-2 font-size-18"></i>
                        Book Now
                      </a>
                      <a
                        href="#"
                        class="theme-btn text-center w-100 theme-btn-transparent"
                      >
                        <i class="la la-heart-o mr-2"></i>Add to Wishlist
                      </a>
                      <div class="d-flex align-items-center justify-content-between pt-2">
                        <a
                          href="#"
                          class="btn theme-btn-hover-gray font-size-15"
                          data-toggle="modal"
                          data-target="#sharePopupForm"
                        >
                          <i class="la la-share mr-1"></i>Share
                        </a>
                        <p>
                          <i class="la la-eye mr-1 font-size-15 color-text-2"></i>
                          3456
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Enquiry Form</h3>
                    <div class="enquiry-forum">
                      <div class="form-box">
                        <div class="form-content">
                          <div class="contact-form-action">
                            <form method="post">
                              <div class="input-box">
                                <label class="label-text">Your Name</label>
                                <div class="form-group">
                                  <span class="la la-user form-icon"></span>
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="text"
                                    placeholder="Your name"
                                  />
                                </div>
                              </div>
                              <div class="input-box">
                                <label class="label-text">Your Email</label>
                                <div class="form-group">
                                  <span class="la la-envelope-o form-icon"></span>
                                  <input
                                    class="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                  />
                                </div>
                              </div>
                              <div class="input-box">
                                <label class="label-text">Message</label>
                                <div class="form-group">
                                  <span class="la la-pencil form-icon"></span>
                                  <textarea
                                    class="message-control form-control"
                                    name="message"
                                    placeholder="Write message"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="input-box">
                                <div class="form-group">
                                  <div class="custom-checkbox mb-0">
                                    <input type="checkbox" id="agreeChb" />
                                    <label for="agreeChb">
                                      I agree with{" "}
                                      <a href="#">Terms of Service</a> and
                                      <a href="#">Privacy Statement</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="btn-box">
                                <button type="button" class="theme-btn">
                                  Submit Enquiry
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Why Book With Us?</h3>
                    <div class="sidebar-list">
                      <ul class="list-items">
                        <li>
                          <i class="la la-dollar icon-element mr-2"></i>
                          No-hassle best price guarantee
                        </li>
                        <li>
                          <i class="la la-microphone icon-element mr-2"></i>
                          Customer care available 24/7
                        </li>
                        <li>
                          <i class="la la-thumbs-up icon-element mr-2"></i>
                          Hand-picked Tours & Activities
                        </li>
                        <li>
                          <i class="la la-file-text icon-element mr-2"></i>Free
                          Travel Insureance
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Get a Question?</h3>
                    <p class="font-size-14 line-height-24">
                      Do not hesitate to give us a call. We are an expert team
                      and we are happy to talk to you.
                    </p>
                    <div class="sidebar-list pt-3">
                      <ul class="list-items">
                        <li>
                          <i class="la la-phone icon-element mr-2"></i>
                          <a href="#">+ 61 23 8093 3400</a>
                        </li>
                        <li>
                          <i class="la la-envelope icon-element mr-2"></i>
                          <a href="mailto:info@trizen.com">info@trizen.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Organized by</h3>
                    <div class="author-content d-flex">
                      <div class="author-img">
                        <a href="#">
                          <img src="images/team8.jpg" alt="testimonial image" />
                        </a>
                      </div>
                      <div class="author-bio">
                        <h4 class="author__title">
                          <a href="#">royaltravelagency</a>
                        </h4>
                        <span class="author__meta">Member Since 2017</span>
                        <span class="ratings d-flex align-items-center">
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star-o"></i>
                          <span class="ml-2">305 Reviews</span>
                        </span>
                        <div class="btn-box pt-3">
                          <a
                            href="#"
                            class="theme-btn theme-btn-small theme-btn-transparent"
                          >
                            Ask a Question
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingDetail;
