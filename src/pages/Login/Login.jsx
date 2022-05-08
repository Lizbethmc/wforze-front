import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
//import Input from "./components/Input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function handleChange (name, value){
  //     if(name == "usuario") {
  //         setUser(value)
  //     }else{
  //         setPassword(value)
  //     }
  // };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_URL+"auth/login", {
        email: email,
        password: password
      })
      .then((res) => console.log(res))
      .catch((e) => console.log("evento", e));
  }

  console.log("usuario", process.env.REACT_APP_BASE_URL);
  console.log("password", password);

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <Title text="Bienvenido" />
      <Label text="Usuario" />
      <input
        id="usuario"
        name="usuario"
        type="text"
        placeholder="Ingrese su usuario"
        className="regular-style"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label text="Contraseña" />
      <input
        id="contraseña"
        name="contraseña"
        type="password"
        placeholder="Ingrese su contraseña"
        className="regular-style"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button">Iniciar sesión</button>
      <p>Registrarme</p>
      <p>¿Haz olvidado tu contraseña?</p>
    </form>
  );
};

export default Login;
