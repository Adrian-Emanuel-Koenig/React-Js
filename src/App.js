import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/Item Detail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

return (
  <BrowserRouter>
    <div className="App">
      <body>
      <header >
          <NavBar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Guitars"} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Guitars"} />}/>
        <Route path='/category/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </main>
      </body>
    </div>
    </BrowserRouter>
  );
}

export default App;