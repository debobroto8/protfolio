// src/components/Contact.js
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <section className="py-5 bg-light H " id="contact">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" placeholder="Your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Send Message</button>
            </form>
          </div>

          {/* Google Map */}
          <div className="col-md-6">
            <div className="ratio ratio-4x3 rounded-3 shadow-sm">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.920749912646!2d-122.08424978469296!3d37.422065979825675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b4f17e08a9%3A0xf2323a89195e2fbf!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634579879856!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
