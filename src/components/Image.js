import { useState } from "react";

export function Image({ className, url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className ? className : ""} image-container`}
    >
      <img src={url} alt="" className="image" />
    </div>
  );
}
