import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import Image from "../components/Image";
import { getClassName } from "../utils";

export function Photos() {
  const { photos } = useContext(StoreContext);

  return (
    <main className="photos">
      <h1 className="photos__title">Photos</h1>
      {photos.map((photo, i) => (
        <Image key={photo.id} {...photo} className={getClassName(i)} />
      ))}
    </main>
  );
}
