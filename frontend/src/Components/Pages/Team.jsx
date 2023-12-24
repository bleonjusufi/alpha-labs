import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BJ from '../Images/Bleon.jpg';
import BP from '../Images/BP.jpg';
import AH from '../Images/AH.jpg';
import EK from '../Images/EK.jpg';
import MA from '../Images/MA.jpg';
import DK from '../Images/DK.jpg';
import LK from '../Images/LK.png';
import EO from '../Images/EO.png';
import '../CSS/Team.css';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Bleon Jusufi',
      position: 'CEO & Software Engineer',
      image: BJ,
      description: 'Experienced leader, a founding force at AlphaLabs, pioneering software solutions and innovation.',
    },
    {
      id: 2,
      name: 'Blend Podvorica',
      position: 'Co-CEO & Software Engineer',
      image: BP,
      description: 'An instrumental co-founder and software engineer at AlphaLabs, driving innovation in tech realms.',
    },
    {
      id: 3,
      name: 'Arlind Hasani',
      position: 'Back-End Developer',
      image: AH,
      description: 'A backend coding architect at AlphaLabs, shaping robust digital foundations with precision and technical expertise.',
    },
    {
      id: 4,
      name: 'Dion Kelmendi',
      position: 'Back-End Developer',
      image: DK,
      description: 'A digital architect behind-the-scenes at AlphaLabs, weaving intricate codes to fortify resilient digital realms..',
    },
    {
      id: 5,
      name: 'Ernis Kasumi',
      position: 'Front-End Developer',
      image: EK,
      description: 'A front-end artisan at AlphaLabs, shaping captivating online interactions with coding expertise and creative flair.'
    },
    {
      id: 6,
      name: 'Leart Krasniqi',
      position: 'Front-End Developer',
      image: LK,
      description: 'A front-end virtuoso at AlphaLabs, crafting immersive digital experiences through code and design synergy.'
    },
    {
      id: 7,
      name: 'Mal Agushi',
      position: 'Front-End Developer',
      image: MA,
      description: 'A front-end maestro at AlphaLabs, sculpting engaging digital interfaces with coding prowess.'
    },
    {
      id: 8,
      name: 'Edi Oruqi',
      position: 'Junior Java Programmer',
      image: EO,
      description: 'Junior Java coder at Alpha Labs: sharp problem-solver, coding enthusiast.'
    }
    // Add more team members here
  ];

  return (
    <>
    <Header />
    <div className="team">
    <div className="container">
      <h2 className="team-title">Meet Our Innovators: The AlphaLabs Team</h2>
    <div className="team-grid">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-member">
          <img src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <p className="member-position">{member.position}</p>
          <p className="description">{member.description}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
    <Footer />
    </>
  );
  }

export default Team