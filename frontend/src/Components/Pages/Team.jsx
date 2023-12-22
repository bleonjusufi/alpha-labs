import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BJ from '../Images/Bleon.jpg';
import '../CSS/Team.css';

function TeamMember(props) {
    const { name, title } = props;
    return (
        <>
        <Header />
      <div className="team-member">
        <img src={BJ} alt={name} />
        <h3>{name}</h3>
        <p>
        Bleon Jusufi, an accomplished Software Engineer at Alpha Labs,
         brings expertise in crafting innovative solutions, 
         leveraging cutting-edge technologies,
          and demonstrating exceptional proficiency in software development. 
          With a keen eye for detail and a passion for pushing boundaries, 
          Bleon consistently delivers high-quality, efficient software solutions,
           contributing significantly to Alpha Labs' success in the tech industry. 
        </p>
        <p className="job-title">{title}</p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      </>
    );
  }
  
  function Team() {
    return (
        <>
      <div className="team">
        <TeamMember name="Bleon Jusufi" title="Software Engineer" />
        <TeamMember name="May Brown" title="Sales Manager" />
        <TeamMember name="Ann Richmond" title="Web Developer" />
        <TeamMember name="Roxie Swanson" title="Web Designer" />
      </div>
      <Footer />
      </>
    );
  }

export default Team