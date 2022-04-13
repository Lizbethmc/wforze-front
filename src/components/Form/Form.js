import React, { useState } from "react";
import FormSuccess from "../FormSuccess/FormSuccess";
import Register from '../Register/Register';
import './Form.css';
import logo from '../../Assets/img.png'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div className='form-container'>
            <span className='close-btn'>x</span>
            <div className='form-section'>
                {!isSubmitted ? (<Register submitForm={submitForm} />) : (<FormSuccess />)}
            </div>
            <div className='form-section'>
                <img src={logo} alt='spaceship' className='form-img' />
            </div>
        </div>
    );
};

export default Form;
