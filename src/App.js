import './App.css';
import { useState } from "react";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/Item Detail/ItemDetailContainer';

function App() {

const [initial, setInitial] = useState(1);
const [stock, setStock] = useState(5);
const onAdd = () => {initial < stock && setInitial(initial + 1)};
const Remove = () => {initial > 1 && setInitial(initial - 1)};

return (
    <div className="App">
      <body>
      <header >
          <NavBar />
      </header>
      <main>
          <ItemListContainer greeting={"Guitars"} />
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} Remove={Remove} />
          <ItemDetailContainer/>
      </main>
      </body>
    </div>
  );
}

export default App;