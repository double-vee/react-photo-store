import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { CartItem } from "../components/CartItem";

export function Cart() {
  const { cartItems } = useContext(StoreContext);

  const items = cartItems.map((item) => <CartItem key={item.id} {...item} />);

  return (
    <main className="cart">
      <h1 className="cart__title">Check out</h1>
      {items}
    </main>
  );
}
