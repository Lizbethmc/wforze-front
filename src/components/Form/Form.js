import React, { useState } from "react";
import FormSuccess from "../FormSuccess/FormSuccess";
import Register from '../Register/Register';
import './Form.css';

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
                <img src='Assets/img.png' alt='spaceship' className='form-img' />
            </div>
        </div>
    );
};

export default Form;
