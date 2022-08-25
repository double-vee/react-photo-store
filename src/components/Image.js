import { useState, useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

export function Image({ className, url, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleIsFavorite } = useContext(StoreContext);

  const favIcon = isHovered && (
    <i
      onClick={() => toggleIsFavorite(id)}
      className="ri-heart-line favorite"
    ></i>
  );
  const addIcon = isHovered && <i className="ri-add-circle-line add"></i>;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className ? className : ""} image-container`}
    >
      <img src={url} alt="" className="image" />
      {favIcon}
      {addIcon}
    </div>
  );
}
