import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

export function Header() {
  const { cartItems } = useContext(StoreContext);

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <h2 className="header__nav__title">Pic Me</h2>
        </Link>
        <Link to="cart">
          <i
            className={`header__nav__cart ri-shopping-cart-${
              cartItems.length > 0 ? "fill" : "line"
            } ri-fw ri-2x`}
          ></i>
        </Link>
      </nav>
    </header>
  );
}
