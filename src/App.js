import "./App.css";
import Cuentas from "pages/Cuentas";

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import "primeicons/primeicons.css"; //icons

//import Home from "./pages/Home";
import Ingresos from "./pages/Ingresos";
//import bootstrap from "bootstrap";
import Sidebar from "components/Sidebar/Sidebar";
import Login from "pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/cuentas" element={<Cuentas />} />
          <Route exact path="/ingresos" element={<Ingresos />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
