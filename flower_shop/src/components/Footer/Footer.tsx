import './Footer.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_small.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper wrapper_footer">
        <div className="logo_footer">
          <img className="logo_footer" src={logo} alt="project logo" />
          <p className="text_logo_footer">flowers shop</p>
          <p className="footer_text">© 2023</p>
        </div>
        <div className="footer_links">
          <a
            href="https://github.com/anastasiasyt"
            className="author-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="author-link__text">anastasiasyt</span>
          </a>
        </div>
        <div>
          <a href="https://rs.school/react/" className="rs_logo_footer">
            <span className="school-link__text">Rolling Scopes School</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
