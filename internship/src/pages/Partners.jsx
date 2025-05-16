import './style.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'TechCorp',
      tier: 'platinum',
      description: 'TechCorp is a global leader in technological innovations, providing cutting-edge solutions across various industries. Their commitment to excellence and continuous improvement has positioned them at the forefront of the tech world.'
    },
    {
      id: 2,
      name: 'DataSystems',
      tier: 'gold',
      description: 'DataSystems specializes in data analytics and cloud computing services. Their expertise enables businesses to harness the power of data for informed decision-making and strategic growth.'
    },
    {
      id: 3,
      name: 'CloudNine',
      tier: 'gold',
      description: 'CloudNine offers robust cloud infrastructure solutions, ensuring scalability, security, and reliability for enterprises of all sizes. Their innovative approach simplifies complex cloud migrations.'
    },
    {
      id: 4,
      name: 'CodeCraft',
      tier: 'silver',
      description: 'CodeCraft is dedicated to crafting high-quality software solutions. Their team of skilled developers focuses on delivering user-centric applications that drive engagement and efficiency.'
    },
    {
      id: 5,
      name: 'ByteSize',
      tier: 'silver',
      description: 'ByteSize provides compact and efficient tech solutions tailored for startups and small businesses. Their agile methodologies ensure quick turnaround times without compromising quality.'
    },
    {
      id: 6,
      name: 'FutureTech',
      tier: 'silver',
      description: 'FutureTech is at the helm of futuristic technological advancements, exploring AI, IoT, and blockchain to create innovative products that redefine industry standards.'
    },
    {
      id: 7,
      name: 'InnovateX',
      tier: 'platinum',
      description: 'InnovateX drives innovation through collaborative research and development. Their partnerships with academic institutions foster a culture of continuous learning and discovery.'
    },
    {
      id: 8,
      name: 'NextGen Solutions',
      tier: 'gold',
      description: 'NextGen Solutions focuses on next-generation IT services, offering comprehensive solutions that encompass cybersecurity, cloud services, and IT consulting.'
    },
    {
      id: 9,
      name: 'AlphaTech',
      tier: 'silver',
      description: 'AlphaTech delivers alpha-grade technological solutions, emphasizing performance, reliability, and scalability to meet the dynamic needs of modern businesses.'
    },
    {
      id: 10,
      name: 'BetaSoft',
      tier: 'silver',
      description: 'BetaSoft specializes in software testing and quality assurance, ensuring that applications meet the highest standards before reaching end-users.'
    }
    // Add more partners as needed
  ];

  const renderPartners = (tier) => (
    <div className={`pt-partners-grid pt-${tier}`}>
      {partners
        .filter(partner => partner.tier === tier)
        .map(partner => (
          <div key={partner.id} className="pt-partner-card">
            <div className="pt-partner-logo">{partner.name.charAt(0)}</div>
            <h3 className="pt-partner-name">{partner.name}</h3>
            <p className="pt-partner-tier">{tier.charAt(0).toUpperCase() + tier.slice(1)} Partner</p>
            <p className="pt-partner-description">{partner.description}</p>
          </div>
        ))}
    </div>
  );

  return (
    <div className="pt-partners">
      <section className="pt-hero">
        <div className="pt-container">
          <h1 className="pt-title">Our Esteemed Partners</h1>
          <p className="pt-subtitle">
            Collaborating with industry leaders to drive innovation and excellence in technology.
          </p>
        </div>
      </section>

      <section className="pt-partners-list">
        <div className="pt-container">
          <h2 className="pt-section-title">Platinum Partners</h2>
          <p className="pt-section-desc">Our top-tier partners who have made significant contributions to our mission.</p>
          {renderPartners('platinum')}

          <h2 className="pt-section-title">Gold Partners</h2>
          <p className="pt-section-desc">Key collaborators providing invaluable support and expertise.</p>
          {renderPartners('gold')}

          <h2 className="pt-section-title">Silver Partners</h2>
          <p className="pt-section-desc">Emerging partners bringing fresh perspectives and innovative solutions.</p>
          {renderPartners('silver')}
        </div>
      </section>

      <section className="pt-cta">
        <div className="pt-container">
          <h2 className="pt-cta-title">Join Our Partner Network</h2>
          <p className="pt-cta-desc">
            Become a part of our growing ecosystem of technology leaders. Collaborate with us to shape the future of innovation and make a lasting impact.
          </p>
          <button className="pt-button">Become a Partner</button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
