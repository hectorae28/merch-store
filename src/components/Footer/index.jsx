import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './styles.css';
function Footer() {
  return (
    <footer className="Footer">
      <h3>Esta es una demo de una tienda</h3>
      <div className="copyright">
        <h3>Creado por: Hector Archer</h3>
        <div className="links">
          <a
            href="https://github.com/hectorae28"
            className=" github"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="social-links" />
          </a>
          <a
            href="https://twitter.com/archer_hector"
            className=" twitter"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/hector-archer-b6286621b/"
            className=" linkedin"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-links" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
