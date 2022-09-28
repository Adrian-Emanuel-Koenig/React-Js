import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/Item Detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <body>
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Guitars"} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Guitars"} />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
    </body>
  );
}

export default App;
