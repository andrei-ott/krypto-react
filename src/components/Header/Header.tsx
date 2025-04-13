import './Header.css';

import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="mb-8 flex justify-between pt-11">
      <Link to="/" className="font-bold">
        KRYPTO
      </Link>

      <nav className="flex w-[524px] justify-between">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          about
        </NavLink>
        <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          pricing
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
          contacts
        </NavLink>
        <NavLink to="/buy-nfts" className={({ isActive }) => (isActive ? 'active' : '')}>
          buy nfts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
