import { createContext, useState } from "react";

const StoreContext = createContext();

function StoreContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  return (
    <StoreContext.Provider value={{ photos }}>{children}</StoreContext.Provider>
  );
}

export { StoreContextProvider, StoreContext };
