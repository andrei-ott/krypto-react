import './Header.scss';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mb-14 flex justify-between pt-14">
      <Link to="/" className="font-bold">
        KRYPTO
      </Link>

      <nav className="flex w-[524px] justify-between">
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
