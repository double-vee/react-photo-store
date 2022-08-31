import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { CartItem } from "../components/CartItem";
import { Link } from "react-router-dom";

export function Cart() {
  const { cartItems } = useContext(StoreContext);

  const items = cartItems.map((item) => <CartItem key={item.id} {...item} />);

  const totalCost = (6 * cartItems.length).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <main className="cart">
      <h1 className="cart__title">Check out</h1>
      {items.length > 0 ? (
        <div className="cart__items">
          {items}
          <p className="cart__total-cost">Total: {totalCost}</p>
          <button className="cart__btn--order">Place order</button>
        </div>
      ) : (
        <div className="cart__items">
          <p className="cart__empty">
            Your cart is empty. <Link to="/">Click here to start shopping</Link>
            .
          </p>
        </div>
      )}
    </main>
  );
}
