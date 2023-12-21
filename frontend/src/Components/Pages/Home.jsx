import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Office from '../Images/big-img.jpg';
import Meet from '../Images/hero.png';
import team from '../Images/developers.webp';
import '../CSS/Home.css';

function Home() {
    return (
      <>
        <Header />
        <div className="home-main__section">
          <div className="text-section">
            <h1>Engineering simplicity, personalized for your world.</h1>
            <p>
              Every phase of your growth story finds reinforcement in our
              solutions.
            </p>
            <button className="main-section__btn">Get Started</button>
          </div>
  
          <div className="image-section">
            <img src={Office} alt="Working environment" id="home-img" />
          </div>
        </div>
        <div className="container">
          <div className="second-section">
            <div className="headline-reasons">
              <h3 className="secondary-text">Why choose us?</h3>
              <h2 className="reason-text">
                Here are a few
                <span className="highlight"> reasons </span>
                why our customers choose Alpha Labs.
              </h2>
            </div>
            <div className="tabs-section">
              <div className="tab-menu">
                <a href="#" id="tab">
                  <div className="first-tab">01</div>
                  <div className="tab-inner">
                    <h3 className="tab-desc">Collect Ideas</h3>
                    <div className="body-color">
                      Alpha Labs innovatively gathers diverse ideas.
                    </div>
                  </div>
                </a>
                <a href="#" id="tab">
                  <div className="first-tab">02</div>
                  <div className="tab-inner">
                    <h3 className="tab-desc">Data Analysis</h3>
                    <div className="body-color">
                      Alpha Labs extracts insights for informed decisions.
                    </div>
                  </div>
                </a>
                <a href="#" id="tab">
                  <div className="first-tab">03</div>
                  <div className="tab-inner">
                    <h3 className="tab-desc">Finalize Product</h3>
                    <div className="body-color">
                      Alpha Labs shapes user-centric products iteratively.
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid-section">
              <div className="left-img">
                <img src={Meet} alt="" className="grid-img" />
              </div>
              <div className="text-area">
                <p className="text-area__desc">
                  Alpha Labs, the cradle of innovation, pulsates with a mosaic of
                  ideas that sculpt its future. Here, diverse minds converge,
                  birthing groundbreaking advancements in science and technology.
                  From biotech marvels to AI frontiers, each idea illuminates the
                  path to a transformative tomorrow
                </p>
              </div>
            </div>
          </div>
          <h2 className="third-section__title">Dedicated Team</h2>
          <div className="third-section">
            <div className="text">
              <p className="text-desc">
                Alpha Labs boasts a team of visionary trailblazers, united by a
                relentless passion for innovation and a shared commitment to
                pioneering groundbreaking solutions. Comprising brilliant minds
                from diverse backgrounds, this dedicated squad thrives on
                collaboration, leveraging their collective expertise to push the
                boundaries of technological advancement. Fuelled by creativity and
                a drive for excellence, the Alpha Labs team is steadfast in its
                mission to redefine possibilities and shape a future where
                innovation knows no bounds.
              </p>
            </div>
            <div className="right-img">
              <img src={team} alt="" className="third-section__img" />
            </div>
          </div>
          <section className="block-section">
            <div className="container">
              <div className="block-content">
                <span className="subtitle">Get in touch</span>
                <div className="title-content">
                  <h2 className="block-section__title">
                    Let's start <strong>building connections</strong>
                  </h2>
                </div>
              </div>
              <div className="block-button">
                <button type="submit" className="block-btn">
                  Build your project
                </button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Home;
  