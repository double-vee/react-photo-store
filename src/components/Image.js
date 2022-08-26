import { useState, useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import PropTypes from "prop-types";

function Image({ className, url, id, isFavorite }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleIsFavorite, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  const favIconEmpty = isHovered && !isFavorite && (
    <i
      onClick={() => toggleIsFavorite(id)}
      className="ri-heart-line favorite"
    ></i>
  );

  const favIconFull = isFavorite && (
    <i
      onClick={() => toggleIsFavorite(id)}
      className="ri-heart-fill favorite"
    ></i>
  );

  const isInCart = cartItems.find((item) => item.id === id);

  const addIcon = isHovered && !isInCart && (
    <i onClick={() => addToCart(id)} className="ri-add-circle-line add"></i>
  );

  const cartIcon = isInCart && (
    <i
      onClick={() => removeFromCart(id)}
      className="ri-shopping-cart-fill add"
    ></i>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className ? className : ""} image-container`}
    >
      <img src={url} alt="" className="image" />
      {favIconEmpty}
      {favIconFull}
      {addIcon}
      {cartIcon}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

export default Image;
