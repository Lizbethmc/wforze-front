import React from "react";
// import Navbar from "components/Navbar/Navbar";
import "./Cuentas.css";
//import bootstrap from "bootstrap";

const Cuentas = () => {
  return (

    <div className="" >
      {/* <Navbar/> */}
      <h1>Mis cuentas</h1>
      <h2>Registro de cuentas</h2>

      <div>
        
        <div />

        <form className="registro-cuentas mx-auto col-9 ">
          <div className="m-3">
            <label>Nombre de la cuenta</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la cuenta"
            ></input>
          </div>

          <div className="m-3">
            <select className="form-select" id="inputGroupSelect01">
              <option defaultValue={"Tipo"}>Tipo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="m-2">
            <label className="">Número de cuenta</label>
            <input
              type="text"
              className="form-control"
              placeholder="Número de cuenta"
            ></input>
          </div>

          <div className="m-3">
            <label className="">CVE</label>
            <input type="text" class="form-control" placeholder="CVE"></input>
          </div>

          <div className="m-3">
            <label className="">Saldo actual</label>
            <input type="text" class="" placeholder="$0.00 MXN"></input>
          </div>

          <div className="m-3">
            <label className="">Fecha de corte</label>
            <select className="form-select" id="inputGroupSelect02">
              <option defaultValue={"Fecha de corte"}>Fecha de corte</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-12 float-right" id="add-cuenta">
            <button className="btn btn-primary" type="submit">
              Agregar cuenta
            </button>
          </div>
        </form>
    </div>
    </div>
      );
};

      export default Cuentas
