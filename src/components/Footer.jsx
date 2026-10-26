import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold">MyWebsite</h5>
              <p className="text-white-50">
                We provide quality services and solutions to help your business
                grow.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white-50 text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Contact Us</h5>
              <p className="text-white-50 mb-2">
                <i className="bi bi-geo-alt me-2"></i> Karachi, Pakistan
              </p>
              <p className="text-white-50 mb-2">
                <i className="bi bi-envelope me-2"></i> info@example.com
              </p>
              <p className="text-white-50">
                <i className="bi bi-telephone me-2"></i> +92 300 1234567
              </p>
            </div>
          </div>

          <hr className="border-secondary" />

          <div
            className="d-flex flex-column flex-md-row
                  justify-content-between align-items-center"
          >
            <p className="text-white-50 mb-2 mb-md-0">
              &copy; 2026 MyWebsite. All rights reserved.
            </p>

            <div>
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
