import React from 'react';
import './Style.css';
import useRegister from "./UseRegister";

const Register = () => {
    const {
        values,
        setValues,
        errors,
        setErrors,
        validate,
        onSubmit
    } = useRegister();// importado del otro archivo, y destructurado

    return (
        <div className='registrationForm_container'>
            <div className="navbar"/>

            <div className='form-content-right'>
                <form className='form'>
                    <h1>Registarse</h1>

                    <div className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            <h3>Email</h3>
                            <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email' />
                        </label>
                    </div>

                    <div>
                        <label htmlFor='password' className='form-label'>
                            <h3>Contraseña</h3>
                            <input id='password' type='password' name='password' className='form-input' placeholder='Enter your password' />
                        </label>
                    </div>

                    <div>
                        <label htmlFor='password2' className='form-label'>
                            <h3>Confirmacion de Contraseña</h3>
                            <input id='password2' type='password2' name='password2' className='form-input' placeholder='Enter your password2' />
                        </label>
                    </div>
                    <button className='form-input-btn' type='submit'>Registrar</button>
                    <span className='form-input-login'>
                        ¿Ya tienes cuenta existente?<a href=''>Iniciar Sesion</a>
                    </span>
                </form>
            </div>
        </div>
    );

}
export default Register