import { useState, useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import heroBg from './images/hero-bg.jpg';
import aboutImg from './images/john-doe-about.jpg';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Mentions from './pages/Mentions';

const skills = [
  { name: 'HTML5', percent: 90, variant: 'danger' },
  { name: 'CSS3', percent: 80, variant: 'info' },
  { name: 'JAVASCRIPT', percent: 70, variant: 'warning' },
  { name: 'PHP', percent: 60, variant: 'success' },
  { name: 'REACT', percent: 50, variant: 'primary' },
];

const footerLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Me contacter', path: '/contact' },
  { label: 'Mentions légales', path: '/mentions' },
];

const footerProjects = [
  'Fresh Food',
  'Restaurant Akira',
  'Espace bien-être',
  'SEO',
  "Création d'une API",
  "Maquette d'un site",
];

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {githubData && (
            <div className="d-flex gap-4">
              <img src={githubData.avatar_url} alt="Avatar GitHub" className="modal-avatar" />
              <ListGroup variant="flush" className="flex-grow-1">
                <ListGroup.Item className="d-flex align-items-center gap-2">
                  <i className="bi bi-person-fill"></i>
                  <a href={githubData.html_url} target="_blank" rel="noreferrer">{githubData.name}</a>
                </ListGroup.Item>
                {githubData.location && (
                  <ListGroup.Item className="d-flex align-items-center gap-2">
                    <i className="bi bi-geo-alt-fill"></i>
                    {githubData.location}
                  </ListGroup.Item>
                )}
                {githubData.bio && (
                  <ListGroup.Item className="d-flex align-items-center gap-2">
                    <i className="bi bi-chat-quote-fill"></i>
                    {githubData.bio}
                  </ListGroup.Item>
                )}
                <ListGroup.Item className="d-flex align-items-center gap-2">
                  <i className="bi bi-book-fill"></i>
                  Repositories : {githubData.public_repos}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center gap-2">
                  <i className="bi bi-people-fill"></i>
                  Followers : {githubData.followers}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center gap-2">
                  <i className="bi bi-people-fill"></i>
                  Following : {githubData.following}
                </ListGroup.Item>
              </ListGroup>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Fermer</Button>
        </Modal.Footer>
      </Modal>

      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay-home" />
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="hero-btn" onClick={() => setShowModal(true)}>En savoir plus</button>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <div className="about-col">
            <h2 className="section-title">A propos</h2>
            <div className="section-divider" />
            <img src={aboutImg} alt="John Doe" className="about-img" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at?</p>
          </div>

          <div className="skills-col">
            <h2 className="section-title">Mes compétences</h2>
            <div className="section-divider" />
            {skills.map((skill) => (
              <div key={skill.name} className="skill">
                <div className="skill-label">{skill.name} {skill.percent}%</div>
                <ProgressBar now={skill.percent} variant={skill.variant} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar-brand">JOHN DOE</div>
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar-links${menuOpen ? ' navbar-links--open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/mentions" onClick={() => setMenuOpen(false)}>Mentions Légales</NavLink>
        </nav>
      </header>

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="footer-col">
          <h4>John Doe</h4>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
          <div className="footer-icons">
            <a href="#github" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Liens utiles</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Mes dernières réalisations</h4>
          <ul>
            {footerProjects.map((project) => (
              <li key={project}><Link to="/portfolio">{project}</Link></li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
