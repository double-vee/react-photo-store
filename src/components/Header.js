import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <h2 className="header__nav__title">Pic Me</h2>
        </Link>
        <Link to="cart">
          <i className="header__nav__cart ri-shopping-cart-line ri-fw ri-2x"></i>
        </Link>
      </nav>
    </header>
  );
}
