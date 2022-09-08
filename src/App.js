import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/Item Detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <body>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Guitars"} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer greeting={"Guitars"} />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </body>
  );
}

export default App;
