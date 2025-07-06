import { FaTwitter, FaInstagram, FaPinterest, FaTumblr, FaChevronRight } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row py-5">
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase mb-4">Customer Services</h6>
            <ul className="list-unstyled">
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> Help & Contact Us</a></li>
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> Returns & Refunds</a></li>
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> Online Stores</a></li>
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase mb-4">Company</h6>
            <ul className="list-unstyled">
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> What We Do</a></li>
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> Services</a></li>
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> Latest Posts</a></li>
              <li><a className="footer-link text-white d-flex align-items-center mb-2" href="#"><FaChevronRight className="me-2" /> FAQs</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase mb-4">Follow Us</h6>
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a className="text-white fs-4" href="#"><FaTwitter /></a>
              </li>
              <li className="list-inline-item me-3">
                <a className="text-white fs-4" href="#"><FaInstagram /></a>
              </li>
              <li className="list-inline-item me-3">
                <a className="text-white fs-4" href="#"><FaPinterest /></a>
              </li>
              <li className="list-inline-item">
                <a className="text-white fs-4" href="#"><FaTumblr /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top pt-3" style={{ borderColor: "#444" }}>
          <div className="row">
            <div className="col-md-6">
              <p className="small text-muted mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="small text-muted mb-0">
                Developed by{" "}
                <a
                  href="https://bootstraptemple.com/p/bootstrap-ecommerce"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-decoration-underline"
                >
                R.R
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;