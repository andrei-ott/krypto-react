import './Header.scss';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        KRYPTO
      </Link>

      <nav>
        <Link to="/" className="navbar-item">
          about
        </Link>
        <Link to="/pricing" className="navbar-item">
          pricing
        </Link>
        <Link to="/contacts" className="navbar-item">
          contacts
        </Link>
        <Link to="/buy-nfts" className="navbar-item">
          buy nfts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
