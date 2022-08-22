import { createContext, useState, useEffect } from "react";

const StoreContext = createContext();
const URL =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function StoreContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

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
    <StoreContext.Provider value={{ photos }}>{children}</StoreContext.Provider>
  );
}

export { StoreContextProvider, StoreContext };
