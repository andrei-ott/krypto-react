import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mb-14 flex justify-between pt-14">
      <Link to="/" className="font-bold">
        KRYPTO
      </Link>

      <nav className="flex w-[524px] justify-between">
        <Link to="/">about</Link>
        <Link to="/pricing">pricing</Link>
        <Link to="/contacts">contacts</Link>
        <Link to="/buy-nfts">buy nfts</Link>
      </nav>
    </header>
  );
}

export default Header;
