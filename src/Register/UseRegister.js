import {useState} from 'react';
import './Style.css';

const useRegister = validate => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    };


    return ({
        setValues,
        values,
        errors,
        setErrors,
        handleChange,
        handleSubmit
    })
}

export default useRegister;