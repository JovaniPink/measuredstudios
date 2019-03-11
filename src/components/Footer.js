import React from 'react';

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/MeasuredStudios"
            className="icon alt fa-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/MeasuredStudios/"
            className="icon alt fa-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/measuredstudios/"
            className="icon alt fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MEASUREDSTUDIOS"
            className="icon alt fa-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/measuredstudios"
            className="icon alt fa-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          <a
            href="https://www.jovanipink.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jovani Pink
          </a>{' '}
          made it with love!
        </li>
        <li>&copy; Measured Studios LLC</li>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            Terms
          </a>{' '}
          |{' '}
          <a href="" target="_blank" rel="noopener noreferrer">
            Privacy
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
