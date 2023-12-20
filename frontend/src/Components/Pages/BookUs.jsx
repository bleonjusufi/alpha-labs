import React from "react";
import '../CSS/BookUs.css';

function BookUs() {
    return(
        <body className="form-body">
        <section className="form-container">
        <header className="form-header">Booking Form</header>
        <form action="#" className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" required />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" required />
            </div>
          </div>
          <div className="input-box address">
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Region</option>
                  <option>Europe</option>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Asia</option>
                  <option>Australia</option>
                  <option>Africa</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="column">
              <input type="text" placeholder="Enter your country" required />
              <input type="number" placeholder="Enter postal code" required />
            </div>
          </div>
          <div className="form-buttons">
          <button id="return-button">Return to Home Page</button>
          <button type="submit" id="submit-button">Book a consulation</button>
          </div>
        </form>
      </section>
      </body>
    );
}

export default BookUs