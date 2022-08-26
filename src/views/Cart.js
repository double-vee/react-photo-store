import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

export function Cart() {
  const { cartItems } = useContext(StoreContext);

  const items = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.url} alt="" className="cart__image image" />
      <p className="cart__price">$6</p>
    </div>
  ));

  return (
    <main className="cart">
      <h1 className="cart__title">Check out</h1>
      {items}
    </main>
  );
}
