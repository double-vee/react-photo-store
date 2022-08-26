import { useState, useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import PropTypes from "prop-types";

function Image({ className, url, id, isFavorite }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const { toggleIsFavorite, addToCart, removeFromCart } =
    useContext(StoreContext);

  const favIcon = isHovered && (
    <i
      onClick={() => toggleIsFavorite(id)}
      className={`ri-heart-${isFavorite ? "fill" : "line"} favorite`}
    ></i>
  );

  const addIcon = isHovered && !isInCart && (
    <i
      onClick={() => {
        addToCart(id);
        setIsInCart(true);
      }}
      className="ri-add-circle-line add"
    ></i>
  );

  const cartIcon = isInCart && (
    <i
      onClick={() => {
        removeFromCart(id);
        setIsInCart(false);
      }}
      className="ri-shopping-cart-fill cart"
    ></i>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className ? className : ""} image-container`}
    >
      <img src={url} alt="" className="image" />
      {favIcon}
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
