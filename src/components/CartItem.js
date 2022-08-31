import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import PropTypes from "prop-types";

const CartItem = ({ id, url }) => {
  const { removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart-item">
      <img src={url} alt="" className="cart__image image" />
      <div className="cart__details">
        <p className="cart__price">$6</p>
        <i
          onClick={() => removeFromCart(id)}
          className="ri-delete-bin-line cart__btn--delete"
        ></i>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartItem;
