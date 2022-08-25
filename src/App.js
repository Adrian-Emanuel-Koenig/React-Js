import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <body>
      <header >
          <NavBar />
      </header>
      <main>
          <ItemListContainer greeting={"Gibson"} />
      </main>
      </body>
    </div>
  );
}

export default App;
