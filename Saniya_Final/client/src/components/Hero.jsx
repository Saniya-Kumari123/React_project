import React from 'react';
import bgImg from '../assets/billboard-bg.png'

const Hero = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section
      className='py-5'
      id="hero"
      style={{ backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 pe-5 mt-5 mt-md-0">
            <h2 className="display-1 text-uppercase">Master Your Skills Online</h2>
            <p className="fs-4 my-4 pb-2">Online Courses Taught by Industry Titans!</p>
            <div>
              <form
                id="form"
                className="d-flex align-items-center position-relative"
                onSubmit={handleFormSubmit}
              >
                <input
                  type="text"
                  name="email"
                  placeholder="What are you trying to learn?"
                  className="form-control bg-white border-0 rounded-4 shadow-none px-4 py-3 w-100"
                />
                <button
                  type="submit"
                  className="btn btn-primary rounded-4 px-3 py-2 position-absolute align-items-center m-1 end-0"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
