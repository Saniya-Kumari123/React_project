import React from 'react';

const ProductDisplay = () => {
  return (
    <section id="features">
      <div className="feature-box container">
        <div className="row ">
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="feature-item py-5  rounded-4">
              <div className="feature-detail text-center">
                <h2 className="feature-title">100+</h2>
                <h6 className="feature-info text-uppercase">instructors</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="feature-item py-5  rounded-4">
              <div className="feature-detail text-center">
                <h2 className="feature-title">500+</h2>
                <h6 className="feature-info text-uppercase">courses</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="feature-item py-5  rounded-4">
              <div className="feature-detail text-center">
                <h2 className="feature-title">free</h2>
                <h6 className="feature-info text-uppercase">certifications</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-5 mb-md-0">
            <div className="feature-item py-5  rounded-4">
              <div className="feature-detail text-center">
                <h2 className="feature-title">2,000+</h2>
                <h6 className="feature-info text-uppercase">happy members</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
