import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer>
      <div className="row">
        <div className="col-12 col-md-4 align-self-center logo">
          <a href="#">
            <img src="./images/logo_white.png" height={100} width={110} />
            <span> HOM</span>
          </a>
          <h4>Hostel - Option good for live</h4>
        </div>
        <div className="col-12 col-md-8">
          <div className="row mt-3">
            <div className="box-mail col-12 col-md-4 row">
              <div className="col-3 align-self-center">
                <i className="fa fa-phone" />
              </div>
              <div className="col-9 align-self-center">
                <div>Hotline</div>
                <a href="#">1900 6067</a>
              </div>
            </div>
            <div className="box-mail col-12 col-md-4 row">
              <div className="col-3 align-self-center">
                <i className="fa fa-users" />
              </div>
              <div className="col-9 align-self-center">
                <div>Support client</div>
                <a href="#">Hom.support.com.vn</a>
              </div>
            </div>
            <div className="box-mail col-12 col-md-4 mt-2 row">
              <div className="col-3 align-self-center">
                <i className="fa fa-headphones" />
              </div>
              <div className="col-9 align-self-center">
                <div>Take care client</div>
                <a href="#">Hom.takecareclient@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="row mt-4 support">
            <div className="col-6 col-md-3">
              <h5>Guide</h5>
              <p>Quotes &amp; Support</p>
              <p>Frequently questions</p>
              <p>Notification</p>
              <p>Contact</p>
              <p>Sitemap</p>
            </div>
            <div className="col-6 col-md-3">
              <h5>Regulations</h5>
              <p>Regulations on posting</p>
              <p>Operational Regulations</p>
              <p>Terms of Agreement</p>
              <p>Privacy Policy</p>
              <p>Resolve complaints</p>
              <p>Comment to report bugs</p>
            </div>
            <div className="col-12 col-md-6 align-self-center social">
              <div className="text-center">
                <a className="btn" href="http://google.com/+">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </a>
                <a
                  className="btn"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook" />
                </a>
                <a className="btn" href="http://www.linkedin.com/in/">
                  <i className="fa fa-linkedin" />
                </a>
                <a className="btn" href="mailto:">
                  <i className="fa fa-envelope-o" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
