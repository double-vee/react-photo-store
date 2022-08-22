import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { Image } from "../components/Image";

export function Photos() {
  const { photos } = useContext(StoreContext);

  return (
    <main className="photos">
      <h1 className="photos__title">Photos</h1>
      {photos.map((photo) => (
        <Image key={photo.id} {...photo} />
      ))}
    </main>
  );
}
