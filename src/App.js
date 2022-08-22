import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Cart } from "./views/Cart";
import { Photos } from "./views/Photos";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
