import React from "react";
import useRegister from "./UseRegister";
import validate from "./ValidateInfo";
import "./Register.css";

const Register = (submitForm) => {
  const { values, errors, handleChange, handleSubmit } = useRegister(
    validate,
    submitForm
  ); // importado del otro archivo, y destructurado

  return (
    <div className="registrationForm_container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Registarse</h1>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            <h3>Email</h3>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            <h3>Contraseña</h3>
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            <h3>Confirmacion de Contraseña</h3>
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter your password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Registrar
        </button>

        <span className="form-input-login">
          ¿Ya tienes cuenta existente?{" "}
          <a href="http://google.com">Iniciar Sesión</a>
        </span>
      </form>
    </div>
  );
};
export default Register;
