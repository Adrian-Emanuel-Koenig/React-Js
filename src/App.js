import './App.css';
import Guitar from './components/Guitar';
import NavBar from './components/NavBar';

function App() {
let myobj = {id: 0, nombre: "Adrián"};
myobj= {...myobj, edad:27}
const { nombre, id }= myobj;
console.log(nombre);
console.log(id);

console.log(myobj);

  return (
    <div className="App">
      <body>
      <header >
          <NavBar />
      </header>
      <main>
        <div>
          <Guitar />
        </div>
      </main>
      </body>
    </div>
  );
}

export default App;
