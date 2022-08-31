import { useContext, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export function Cart() {
  const { cartItems, setCartItems } = useContext(StoreContext);
  const [ordered, setOrdered] = useState(false);

  const items = cartItems.map((item) => <CartItem key={item.id} {...item} />);

  const totalCost = (6 * cartItems.length).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => {
      setCartItems([]);
    }, 3000);
  };

  return (
    <main className="cart">
      <h1 className="cart__title">Check out</h1>
      {items.length > 0 ? (
        <div className="cart__items">
          {items}
          <p className="cart__total-cost">Total: {totalCost}</p>
          <button
            onClick={handleOrder}
            className="cart__btn--order"
            disabled={ordered}
          >
            {ordered ? "Ordering..." : "Place order"}
          </button>
        </div>
      ) : ordered ? (
        <div className="cart__items">
          <p>Order placed!</p>
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
