import { useState } from 'react';

const useForm = (callback, validateInput) => {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validateInput(input));
    if (Object.keys(errors).length === 0 && Object.keys(input).length !== 0) {
      callback();
    }
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
