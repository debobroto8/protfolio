import React from 'react';
import './Header.css';
import Boys from'./team2.png'

const Header = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Something Amazing</h1>
        <p className="subheadline">
          Supercharge your development with Vite + React. Fast, modern, and easy to use.
        </p>

        <ul className="features">
          <li>⚡️ Instant reloads with Vite</li>
          <li>🎨 Built for modern UI development</li>
          <li>🧰 Easy integration with tools and libraries</li>
        </ul>

        <button className="cta-button">🚀 Get Started</button>
      </div>

      <div className="hero-image">
        <img className='p-4'
          src={Boys}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Header;
