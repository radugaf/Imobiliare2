import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./Card";

// const renderedList = videos.map((video) => {
//   return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
// });

const HomeListingsPreview = ({ listings }) => {
  const getListings = () => {
    let listingsOnPage = [];
    let result = [];

    listings.map((listing) => {
      return listingsOnPage.push(
        <Card
          title={listing.title}
          address={listing.address}
          city={listing.city}
          state={listing.state}
          price={listing.price}
          sale_type={listing.sale_type}
          home_type={listing.home_type}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          sqft={listing.sqft}
          photo_main={listing.photo_main}
          slug={listing.slug}
        />
      );
    });

    for (let i = 0; i < listings.length; i++) {
      result.push(<div>{listingsOnPage[i]}</div>);
    }

    return result;
  };
  return (
    <section className="hotel-area section-bg section-padding overflow-hidden padding-right-100px padding-left-100px">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading text-center">
              <h2 className="sec__title line-height-55">
                Listings Preview One
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
                nav
                stagePadding={0}
                margin={50}
                autoplay={true}
              >
                {getListings()}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeListingsPreview;
