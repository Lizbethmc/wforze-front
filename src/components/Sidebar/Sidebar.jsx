import React from "react";

import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
      <li>
        <NavLink to="/" className="text-dark" ><FaIcons.FaBolt className="me-2"/>Home</NavLink>
      </li>
      <li>
        <NavLink to="/cuentas" className="text-dark" ><FaIcons.FaMoneyCheck className="me-2"/>Mis cuentas</NavLink>
      </li>
      <li>
        <NavLink to="/ingresos" className="text-dark" ><FaIcons.FaMoneyBillWaveAlt className="me-2"/>Mis ingresos</NavLink>
      </li>
    </ul>
  </div>
  );
}

export default Sidebar;
