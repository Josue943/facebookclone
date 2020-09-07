import { useState } from 'react';

const useForm = (initialState = {}, callback, validation) => {
  const [values, setValues] = useState(initialState);

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const setValue = data => {
    setValues(data);
  };

  const resetValues = () => {
    setValues(initialState);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!validation(values)) return;
    callback();
  };

  return {
    values,
    onChange,
    onSubmit,
    resetValues,
    setValue,
  };
};

export default useForm;
