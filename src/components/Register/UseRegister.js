import {useState} from 'react';

const useRegister = validate => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
    };


    return ({
        isSubmitting,
        values,
        errors,
        setErrors,
        handleChange,
        handleSubmit
    })
}

export default useRegister;