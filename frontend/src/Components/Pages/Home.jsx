import React from "react";
import Header from "./Header";
import Office from '../Images/big-img.jpg';
import '../CSS/Home.css';

function Home() {
    return (
        <>
          <Header />
            <div className="home-main__section">
              <div className="text-section">
                <h1>Engineering simplicity, personalized for your world.</h1>
                <p>
                Every phase of your growth story finds reinforcement in our solutions.
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
                <h2 className="reason-text">Here are a few 
                <span className="highlight"> reasons </span>
                why our customers choose Alpha Labs.
                </h2>
                </div>
                <div className="tabs-section">
                    <div className="tab-menu">
                        <a id="tab">
                            <div className="first-tab">01</div>
                            <div className="tab-inner">
                                <h3 className="tab-desc">Collect Ideas</h3>
                                <div className="body-color">Alpha Labs innovatively gathers diverse ideas.</div>
                            </div>
                        </a>
                        <a id="tab">
                            <div className="first-tab">02</div>
                            <div className="tab-inner">
                                <h3 className="tab-desc">Data Analysis</h3>
                                <div className="body-color">Alpha Labs extracts insights for informed decisions.</div>
                            </div>
                        </a>
                        <a id="tab">
                            <div className="first-tab">03</div>
                            <div className="tab-inner">
                                <h3 className="tab-desc">Finalize Product</h3>
                                <div className="body-color">Alpha Labs shapes user-centric products iteratively.</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </>
      );      
  }
  
  export default Home;
  