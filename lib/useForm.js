import { useState } from 'react';

const useForm = (callback, validateInput) => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validateInput(input));
    callback();
  };

  const handleChange = (event) => {
    setInput((input) => ({
      ...input,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({
      ...errors,
      [event.target.name]: null,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    input,
    errors,
  };
};

export default useForm;
