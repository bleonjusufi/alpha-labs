import React from "react";
import '../CSS/Careers.css';
import Header from './Header';
import Footer from './Footer';
import Career from '../Images/career.jpg';

function Careers() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="top-section">
            <div className="top-section__text">
              <h1 className="top-section__title">Join our team</h1>
              <p className="top-section__desc">
                Our team continues to expand! We’re always in the hunt for new
                people who will be a part of our family!
              </p>
            </div>
          </div>
          <div className="benefits-grid__section">
            <div className="left-benefits__section">
              <h2 className="benefits-title">The benefits of working with us</h2>
              <ul>
                <li>International Clients</li>
                <li>Challenging Projects</li>
                <li>Super friendly staff</li>
                <li>Continual self development</li>
              </ul>
              <h2 className="values-title">What we value</h2>
              <ul>
                <li>
                  A good team is never a coincidence. Working together requires a
                  lot of work, both from a team leader and team members.{" "}
                </li>
                <li>
                  You manage your tasks and your time however it is convenient for
                  you, as long as you deliver results.{" "}
                </li>
                <li>Good employees show up and do their work. </li>
                <li>
                  Great employees are motivated and passionate about their work.
                </li>
              </ul>
            </div>
            <div className="application-form">
              <form action="" className="career-form">
                <h2>Apply here</h2>
                <input
                  type="text"
                  placeholder="Name and Surname"
                  className="apply-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="apply-input"
                />
                <input type="number" placeholder="Age" className="apply-input" />
                <input
                  type="text"
                  placeholder="Position that you are applying for"
                  className="apply-input"
                />
                <button type="submit" id="apply-btn">
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  

export default Careers