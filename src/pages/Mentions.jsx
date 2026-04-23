import Accordion from 'react-bootstrap/Accordion';

const sections = [
  {
    eventKey: '0',
    title: 'Editeur du site',
    content: (
      <div className="mentions-content">
        <p className="mentions-name">John Doe</p>
        <ul className="coords-list">
          <li><i className="bi bi-house-fill coords-icon"></i> 40 rue Laure Diebold</li>
          <li><i className="bi bi-geo-alt-fill coords-icon"></i> 69009 Lyon, France</li>
          <li><i className="bi bi-telephone-fill coords-icon"></i> 10 20 30 40 50</li>
          <li><i className="bi bi-envelope-fill coords-icon"></i> john.doe@gmail.com</li>
        </ul>
      </div>
    ),
  },
  {
    eventKey: '1',
    title: 'Hébergeur',
    content: (
      <div className="mentions-content">
        <p className="mentions-name">alwaysdata</p>
        <p className="mentions-address">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <p className="mentions-link">
          <i className="bi bi-globe coords-icon"></i>{' '}
          <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
            www.alwaysdata.com
          </a>
        </p>
      </div>
    ),
  },
  {
    eventKey: '2',
    title: 'Crédits',
    content: (
      <div className="mentions-content">
        <p>
          Ce site a été réalisé par John Doe, étudiant au{' '}
          <a href="https://www.cef.fr" target="_blank" rel="noreferrer">
            Centre Européen de formation
          </a>
          .
        </p>
        <p>
          <em>
            Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
            <a href="https://pixabay.com" target="_blank" rel="noreferrer">
              Pixabay
            </a>
          </em>
        </p>
        <p>
          <em>
            La favicon de ce site a été fournie par{' '}
            <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">
              John doe Icons erstellt von Freepik - Flaticon
            </a>
          </em>
        </p>
      </div>
    ),
  },
];

function Mentions() {
  return (
    <main>
      <section className="contact-section">
        <h1>Mentions légales</h1>
        <div className="contact-title-divider" />
      </section>

      <section className="mentions-section">
        <div style={{ width: '100%', maxWidth: '1040px' }}>
          <Accordion defaultActiveKey="0">
            {sections.map((s) => (
              <Accordion.Item eventKey={s.eventKey} key={s.eventKey}>
                <Accordion.Header>{s.title}</Accordion.Header>
                <Accordion.Body>{s.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}

export default Mentions;
