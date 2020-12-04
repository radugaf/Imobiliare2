import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card-item mb-0">
      <div className="card-img">
        <a href="hotel-single.html" className="d-block">
          <img src={props.photo_main} alt="hotel-img" />
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
          <a href="hotel-single.html">{props.title}</a>
        </h3>
        <p className="card-meta">3900 Wailea Alanui Drive, Kihei, HI</p>
        <div className="card-rating">
          <span className="badge text-white">4.4/5</span>
          <span className="review__text">Average</span>
          <span className="rating__text">(30 Reviews)</span>
        </div>
        <div className="card-price d-flex align-items-center justify-content-between">
          <p>
            <span className="price__num">
              Price: ${numberWithCommas(props.price)}
            </span>
          </p>
          <Link to={`/listings/${props.slug}`} className="btn-text">
            See details<i className="la la-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  photo_main: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.string.isRequired,
  sale_type: PropTypes.string.isRequired,
  home_type: PropTypes.string.isRequired,
  sqft: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
