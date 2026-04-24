import banner from '../images/banner.jpg';
import freshFood from '../images/portfolio/fresh-food.jpg';
import restaurantJaponais from '../images/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../images/portfolio/espace-bien-etre.jpg';
import seo from '../images/portfolio/seo.jpg';
import coder from '../images/portfolio/coder.jpg';
import screens from '../images/portfolio/screens.jpg';

const projects = [
  {
    id: 'fresh-food',
    image: freshFood,
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec PHP et MySQL',
  },
  {
    id: 'restaurant-akira',
    image: restaurantJaponais,
    title: 'Restaurant Akira',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec WordPress',
  },
  {
    id: 'espace-bien-etre',
    image: espaceBienEtre,
    title: 'Espace bien-être',
    description: 'Site de vente de produits frais en ligne',
    tech: 'Site réalisé avec LARAVEL',
  },
  {
    id: 'seo',
    image: seo,
    title: 'SEO',
    description: "Améloration du référencement d'un site e-commerce",
    tech: 'Utilisation des outils SEO',
  },
  {
    id: 'api',
    image: coder,
    title: "Création d'une API",
    description: <span>Création d'une API <span style={{ color: '#1a73e8', fontWeight: 700 }}>RESTFULL</span> publique</span>,
    tech: 'PHP - SYMFONY',
  },
  {
    id: 'maquette',
    image: screens,
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    tech: 'Réalisé avec FIGMA',
  },
];

function PortfolioCard({ image, title, description, tech }) {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} className="portfolio-card-img" />
      <div className="portfolio-card-body">
        <h3 className="portfolio-card-title">{title}</h3>
        <p className="portfolio-card-desc">{description}</p>
        <button className="portfolio-btn">Voir le site</button>
      </div>
      <div className="portfolio-card-footer">{tech}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <main>
      <section className="hero-banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay" />
      </section>

      <section className="portfolio-section">
        <div className="page-header">
          <h1 className="page-header-title">Portfolio</h1>
          <p className="page-header-subtitle">Voici quelques-unes de mes réalisations.</p>
          <div className="page-header-divider" />
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
