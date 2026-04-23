import { useState } from 'react';
import banner from '../images/banner.jpg';

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <h1 className="page-header-title">{title}</h1>
      <p className="page-header-subtitle">{subtitle}</p>
      <div className="page-header-divider" />
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
    </div>
  );
}

function Services() {
  const [services] = useState([
    {
      id: 'ux',
      icon: (
        <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: 'UX Design',
      description:
        "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      id: 'dev',
      icon: (
        <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: 'Développement web',
      description:
        'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).',
    },
    {
      id: 'seo',
      icon: (
        <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      title: 'Référencement',
      description:
        "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ]);

  return (
    <main>
      <section className="hero-banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay" />
      </section>

      <section className="services-section">
        <PageHeader
          title="Mon offre de services"
          subtitle="Voici les prestations sur lesquelles je peux intervenir"
        />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;
