import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutImg from '../assets/about-img.jpg';

const About = () => {
  return (
    <>
      <Header />
      <section id="about" className="padding-medium mt-xl-5">
        <div className="container">
          <div className="row align-items-center mt-xl-5">
            <div className="offset-md-1 col-md-5">
              <img src={aboutImg} alt="img" className="img-fluid rounded-circle" />
            </div>
            <div className="col-md-5 mt-5 mt-md-0">
              <div className="mb-3">
                <p className="text-secondary ">Learn more about us</p>
                <h2 className="display-6 fw-semibold">About Us</h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae nam commodi dolore vitae?
                Numquam minima cum asperiores deleniti possimus provident, officia itaque esse eius, delectus incidunt
                laudantium adipisci laboriosam!</p>
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                  <use href="#tick-circle" className="text-secondary" />
                </svg>
                <p className="ps-4">Engage with a worldwide community of inquisitive and imaginative individuals.</p>
              </div>
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                  <use href="#tick-circle" className="text-secondary" />
                </svg>
                <p className="ps-4">Learn a skill of your choice from the experts around the world from various industries</p>
              </div>
              <div className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px">
                  <use href="#tick-circle" className="text-secondary" />
                </svg>
                <p className="ps-4">Learn a skill of your choice from the experts around the world from various industries</p>
              </div>
              <a href="about.html" className="btn btn-primary px-5 py-3 mt-4" style={{ borderRadius: '20px', backgroundColor: 'green', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>Learn more</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
