import React from "react";

import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import Home from "pages/Home";
import Cuentas from "pages/Cuentas";
import Ingresos from "pages/Ingresos";

/*const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" className="text-dark" ><FaIcons.FaBolt className="me-2"/>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Cuentas" className="text-dark" ><FaIcons.FaMoneyCheck className="me-2"/>Mis cuentas</NavLink>
        </li>
        <li>
          <NavLink to="/Ingresos" className="text-dark" ><FaIcons.FaMoneyBillWaveAlt className="me-2"/>Mis ingresos</NavLink>
        </li>
      </ul>
    </div>
  );
}
*/



const Sidebar = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cuentas" component={Cuentas} />
          <Route exact path="/Ingresos" component={Ingresos} />
      </Routes>
    </Router>
  );
}

export default Sidebar;
