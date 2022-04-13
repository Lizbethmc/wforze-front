import { useState } from "react";
import axios from "axios";

const useRegister = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backend, setBackend] = useState('');
  console.log(backend);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios       
    .get("https://mymoney15.herokuapp.com/api/v1/users", 
    {
        email: values.email,
        password: values.password
    })       
    .then((res) => setBackend(res))       
    .catch((err) => console.log(err));   

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    isSubmitting,
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export default useRegister;
