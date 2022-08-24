import { useState } from "react";

export function Image({ className, url }) {
  const [isHovered, setIsHovered] = useState(false);

  const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>;
  const addIcon = isHovered && <i className="ri-add-circle-line add"></i>;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className ? className : ""} image-container`}
    >
      <img src={url} alt="" className="image" />
      {heartIcon}
      {addIcon}
    </div>
  );
}
