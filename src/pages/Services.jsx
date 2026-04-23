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
      icon: <i className="bi bi-pencil-fill" style={{ fontSize: '2.5rem', color: '#1a73e8' }}></i>,
      title: 'UX Design',
      description:
        "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      id: 'dev',
      icon: <i className="bi bi-code-slash" style={{ fontSize: '2.5rem', color: '#1a73e8' }}></i>,
      title: 'Développement web',
      description:
        'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).',
    },
    {
      id: 'seo',
      icon: <i className="bi bi-search" style={{ fontSize: '2.5rem', color: '#1a73e8' }}></i>,
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
