export const CartItem = ({ id, url }) => {
  return (
    <div className="cart-item">
      <img src={url} alt="" className="cart__image image" />
      <div className="cart__details">
        <p className="cart__price">$6</p>
        <i className="ri-delete-bin-line cart__btn--delete"></i>
      </div>
    </div>
  );
};
