import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image2 from "../../assets/images/img2.jpg";

class HomeListingsPreviewTwo extends React.Component {
  render() {
    return (
      <section className="hotel-area section-bg section-padding overflow-hidden padding-right-100px padding-left-100px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title line-height-55">
                  Most Popular Hotel <br /> Destinations
                </h2>
              </div>
            </div>
          </div>
          <div className="row padding-top-50px">
            <div className="col-lg-12">
              <div className="hotel-card-wrap">
                <OwlCarousel
                  className="hotel-card-carousel carousel-action"
                  items={4}
                  dotsEach={true}
                  loop
                  nav
                  stagePadding={0}
                  margin={50}
                  autoplay={true}
                >
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <span className="badge">Bestseller</span>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          The Millennium Hilton New York
                        </a>
                      </h3>
                      <p className="card-meta">124 E Huron St, New york</p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$88.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          Best Western Grant Park Hotel
                        </a>
                      </h3>
                      <p className="card-meta">124 E Huron St, Chicago</p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$58.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <span className="badge">Featured</span>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          Hyatt Regency Maui Resort & Spa
                        </a>
                      </h3>
                      <p className="card-meta">200 Nohea Kai Dr, Lahaina, HI</p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$88.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <span className="badge">Popular</span>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          Four Seasons Resort Maui at Wailea
                        </a>
                      </h3>
                      <p className="card-meta">
                        3900 Wailea Alanui Drive, Kihei, HI
                      </p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$88.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          Ibis Styles London Heathrow
                        </a>
                      </h3>
                      <p className="card-meta">
                        {" "}
                        272 Bath Road, Harlington, England
                      </p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$88.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          Hotel Europe Saint Severin Paris
                        </a>
                      </h3>
                      <p className="card-meta">
                        38-40 Rue Saint Séverin, Paris, Paris
                      </p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$88.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <span className="badge">Bestseller</span>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          The Millennium Hilton New York
                        </a>
                      </h3>
                      <p className="card-meta">124 E Huron St, New york</p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$88.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-item mb-0">
                    <div className="card-img">
                      <a href="hotel-single.html" className="d-block">
                        <img src={Image2} alt="hotel-img" />
                      </a>
                      <div
                        className="add-to-wishlist icon-element"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Bookmark"
                      >
                        <i className="la la-heart-o"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="hotel-single.html">
                          Best Western Grant Park Hotel
                        </a>
                      </h3>
                      <p className="card-meta">124 E Huron St, Chicago</p>
                      <div className="card-rating">
                        <span className="badge text-white">4.4/5</span>
                        <span className="review__text">Average</span>
                        <span className="rating__text">(30 Reviews)</span>
                      </div>
                      <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span className="price__from">From</span>
                          <span className="price__num">$58.00</span>
                          <span className="price__text">Per night</span>
                        </p>
                        <a href="hotel-single.html" className="btn-text">
                          See details<i className="la la-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeListingsPreviewTwo;
