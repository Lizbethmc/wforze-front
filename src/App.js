import "./App.css";
import Cuentas from "pages/Cuentas";

import "primeicons/primeicons.css"; //icons

import Home from "./pages/Home";
import Ingresos from "./pages/Ingresos";
import bootstrap from "bootstrap";
import Sidebar from "components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Cuentas />
    </div>
  );
}

export default App;
