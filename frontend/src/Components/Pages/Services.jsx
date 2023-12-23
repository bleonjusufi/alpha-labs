import React from "react";
import '../CSS/Services.css';
import Header from "./Header";
import Footer from "./Footer";
import analytics from '../Images/analytics.png';
import pm from '../Images/p-management.png';
import seo from '../Images/SEO.png';
import web from '../Images/web.png';
import mobile from '../Images/mobile.png';
import eshop from '../Images/e-shop.png';
import media from '../Images/media.png';
import training from '../Images/training.png';

function Services() {
    return (
      <>
        <Header />
        <div className="services">
          <div className="container">
            <h2 id="services-main__text" className="reason-text">
              The service we offer is{" "}
              <span className="highlight"> specifically </span> <br></br>designed
              to meet your needs.
            </h2>
            <div className="services">
              <div className="service-grid">
                <div className="service-item">
                  <div className="small-img">
                    <img src={analytics} alt="" className="services-img" />
                    <h4 className="services-title">Web Analytics</h4>
                    <p className="services-desc">
                      Alpha Labs masters web analytics, deciphering insights for
                      optimized online strategies and enhanced user experiences.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="small-img">
                    <img src={pm} alt="" className="services-img" id="pm-img" />
                    <h4 className="services-title">Project Management</h4>
                    <p className="services-desc">
                      Alpha Labs excels in project management, orchestrating
                      seamless workflows for successful, on-time project delivery.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="small-img">
                    <img src={seo} alt="" className="services-img" id="seo-img" />
                    <h4 className="services-title">SEO Services</h4>
                    <p className="services-desc">
                      Alpha Labs pioneers SEO services, catapulting your online
                      presence through strategic optimization and heightened
                      visibility in search results.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="small-img">
                    <img src={web} alt="" className="services-img" id="web-img" />
                    <h4 className="services-title">Web Development</h4>
                    <p className="services-desc">
                      Alpha Labs crafts dynamic web solutions, merging innovation
                      and functionality for captivating and responsive online
                      experiences.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="small-img">
                    <img
                      src={mobile}
                      alt=""
                      className="services-img"
                      id="mobile-img"
                    />
                    <h4 className="services-title">Mobile App Development</h4>
                    <p className="services-desc">
                      Alpha Labs crafts dynamic web solutions, merging innovation
                      and functionality for captivating and responsive online
                      experiences.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="small-img">
                    <img
                      src={eshop}
                      alt=""
                      className="services-img"
                      id="shop-img"
                    />
                    <h4 className="services-title">E-Commerce Solutions</h4>
                    <p className="services-desc">
                      Alpha Labs crafts dynamic e-commerce solutions, blending
                      innovation and functionality for seamless online shopping
                      experiences.
                    </p>
                  </div>
                </div>
                <div className="service-item">
                  <div className="small-img">
                    <img
                      src={media}
                      alt=""
                      className="services-img"
                      id="media-img"
                    />
                    <h4 className="services-title">Social Media Management</h4>
                    <p className="services-desc">
                      Alpha Labs crafts dynamic e-commerce solutions, blending
                      innovation and functionality for seamless online shopping
                      experiences.
                    </p>
                  </div>
                </div>
  
                <div className="service-item">
                  <div className="small-img">
                    <img
                      src={training}
                      alt=""
                      className="services-img"
                      id="training-img"
                    />
                    <h4 className="services-title">Internships</h4>
                    <p className="services-desc">
                      Alpha Labs provides immersive tech internships, nurturing
                      talent through hands-on learning and impactful projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  

export default Services