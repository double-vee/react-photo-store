import { createContext, useState, useEffect } from "react";

const StoreContext = createContext();
const URL =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function StoreContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleIsFavorite = (id) => {
    setPhotos((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      );
    });
  };

  const addToCart = (id) => {
    const addedItem = photos.find((item) => item.id === id);
    setCartItems((prev) => [...prev, addedItem]);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <StoreContext.Provider
      value={{ photos, toggleIsFavorite, addToCart, cartItems }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContextProvider, StoreContext };
