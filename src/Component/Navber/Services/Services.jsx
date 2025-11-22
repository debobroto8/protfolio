// src/components/Services.js
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies.",
      icon: "bi bi-code-slash",
    },
    {
      title: "UI/UX Design",
      description: "Clean and user-friendly interface design for web and mobile apps.",
      icon: "bi bi-palette",
    },
    {
      title: "SEO Optimization",
      description: "Boost your website visibility with professional SEO services.",
      icon: "bi bi-graph-up",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps for Android and iOS.",
      icon: "bi bi-phone",
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies.",
      icon: "bi bi-code-slash",
    },
    {
      title: "UI/UX Design",
      description: "Clean and user-friendly interface design for web and mobile apps.",
      icon: "bi bi-palette",
    },
    {
      title: "SEO Optimization",
      description: "Boost your website visibility with professional SEO services.",
      icon: "bi bi-graph-up",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps for Android and iOS.",
      icon: "bi bi-phone",
    },
  ];

  return (
    <section className="py-5 bg-light H Bg-Color" id="services">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className={`${service.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
