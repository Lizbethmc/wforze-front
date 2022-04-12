import React, {useState} from "react";
import FormSuccess from "./FormSuccess";
import Register from './Register';

const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (<Register submitForm={submitForm} />) :
            (<FormSuccess />)}
        </div>
    );
};

export default Form;
