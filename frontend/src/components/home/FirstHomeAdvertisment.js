import React from "react";

const FirstHomeAdvertisment = () => {
  return (
    <section className="info-area info-bg padding-top-50px padding-bottom-50px text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="icon-box">
              <div className="info-icon">
                <i className="la la-bullhorn"></i>
              </div>
              <div className="info-content">
                <h4 className="info__title">You'll never roam alone</h4>
                <p className="info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-box margin-top-50px">
              <div className="info-icon">
                <i className="la la-globe"></i>
              </div>
              <div className="info-content">
                <h4 className="info__title">
                  A world of choice – anytime, anywhere
                </h4>
                <p className="info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-box">
              <div className="info-icon">
                <i className="la la-thumbs-up"></i>
              </div>
              <div className="info-content">
                <h4 className="info__title">Peace of mind, wherever you wander</h4>
                <p className="info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstHomeAdvertisment;
