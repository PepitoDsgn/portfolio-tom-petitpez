import React from 'react';

function Contact() {
  return (
    <main>
      <section className="contact-section">
        <h1>Contact</h1>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <div className="contact-title-divider" />
      </section>

      <section className="about-section">
        <div className="form-card">
          <div className="form-col">
            <h2 className="section-title">Formulaire de contact</h2>
            <div className="section-divider" />
            <form className="contact-form">
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Votre adresse email" />
              <input type="tel" placeholder="Votre numéro de téléphone" />
              <input type="text" placeholder="Sujet" />
              <textarea placeholder="Votre message" rows="10"></textarea>
              <button type="submit" className="submit-btn">Envoyer</button>
            </form>
          </div>

          <div className="coords-col">
            <h2 className="section-title">Mes coordonnées</h2>
            <div className="section-divider" />
            <p className="coords-name">John Doe</p>
            <ul className="coords-list">
              <li><span className="coords-icon">🗒</span> 40 rue Laure Diebold</li>
              <li><span className="coords-icon">📍</span> 69009 Lyon, France</li>
              <li><span className="coords-icon">📞</span> 10 20 30 40 50</li>
              <li><span className="coords-icon">✉</span> john.doe@gmail.com</li>
            </ul>
            <div className="map-wrapper">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.3!2d4.8!3d45.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb4f3f3f3f3f%3A0x0!2s40+Rue+Laure+Diebold%2C+69009+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
