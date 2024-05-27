import React, { useState } from "react";
import { BsGeo, BsTelephoneOutbound, BsEnvelopeAt, BsAlarm } from "react-icons/bs";  // Import React Icons
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from '../assets/billboard-bg.png' // Import your background image

const Contact = () => {
  // Define state and functions here
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic using formData state
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <>
      <Header />
      <section
        className="py-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",  // Ensure the background image covers the full page
        }}
      >
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Get in touch</h2>
                  <p className="lead fs-4 text-secondary mb-5">
                    We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.
                  </p>
                  <div className="d-flex mb-5">
                    <div className="me-4 text-primary">
                      <BsGeo size={32} /> {/* Use the imported icons */}
                    </div>
                    <div>
                      <h4 className="mb-3">Address</h4>
                      <address className="mb-0 text-secondary">8014 Edith Blvd NE, Albuquerque, New York, United States</address>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12 col-sm-6">
                      <div className="d-flex mb-5 mb-sm-0">
                        <div className="me-4 text-primary">
                          <BsTelephoneOutbound size={32} />
                        </div>
                        <div>
                          <h4 className="mb-3">Phone</h4>
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="tel:+15057922430">(505) 792-2430</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="d-flex mb-0">
                        <div className="me-4 text-primary">
                          <BsEnvelopeAt size={32} />
                        </div>
                        <div>
                          <h4 className="mb-3">E-Mail</h4>
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">demo@yourdomain.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <BsAlarm size={32} />
                    </div>
                    <div>
                      <h4 className="mb-3">Opening Hours</h4>
                      <div className="d-flex mb-1">
                        <p className="text-secondary fw-bold mb-0 me-5">Mon - Fri</p>
                        <p className="text-secondary mb-0">9am - 5pm</p>
                      </div>
                      <div className="d-flex">
                        <p className="text-secondary fw-bold mb-0 me-5">Sat - Sun</p>
                        <p className="text-secondary mb-0">9am - 2pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* Email, Phone, Subject, Message fields */}
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
