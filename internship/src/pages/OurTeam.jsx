import React from 'react';
import './style.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 5,
      name: 'Rakesh John',
      role: 'Co-Founder & CEO',
      bio: 'Visionary entrepreneur committed to bridging the gap between education and employability in tech.'
    },
    {
      id: 6,
      name: 'Jabi Vulla',
      role: 'Manager',
      bio: 'Operations expert ensuring seamless coordination across departments and program executions.'
    }
  ];

  return (
    <div className="ot-our-team">
      <section className="ot-hero">
        <div className="ot-container">
          <h1 className="ot-title">Our Team</h1>
          <p className="ot-subtitle">Meet the minds behind TSAR-IT who are driving impact through education and innovation.</p>
        </div>
      </section>

      <section className="ot-team-members">
        <div className="ot-container">
          <h2 className="ot-section-title">Leadership Team</h2>
          <p className="ot-section-desc">
            Our leaders come from diverse backgrounds in tech, education, and industry engagement — united by a shared mission to empower future innovators.
          </p>
          <div className="ot-members-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="ot-member">
                <div className="ot-avatar">{member.name.charAt(0)}</div>
                <h3 className="ot-member-name">{member.name}</h3>
                <p className="ot-member-role">{member.role}</p>
                <p className="ot-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ot-mentors">
        <div className="ot-container">
          <h2 className="ot-section-title">Industry Mentors</h2>
          <p className="ot-section-desc">
            TSAR-IT is supported by 100+ industry professionals who mentor interns, review projects, and provide career coaching. Their expertise ensures our programs remain relevant, rigorous, and impactful.
          </p>
          <button className="ot-button">Become a Mentor</button>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
