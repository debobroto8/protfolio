// src/components/About.js
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="py-5 bg-white H Bg-Color" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4">About Us</h2>
            <p className="text-white">
              Welcome to <strong>MyBrand</strong> – where creativity meets technology. We’re a passionate team of developers, designers, and strategists who love building beautiful and functional digital experiences.
            </p>
            <p className="">
              Whether you're a startup or an established brand, we help you stand out with custom web solutions, responsive design, and impactful strategies.
            </p>
            <a href="#services" className="btn btn-outline-primary mt-3">Learn More</a>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://source.unsplash.com/600x400/?technology,team"
              alt="About us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
