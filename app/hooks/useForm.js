import { useState } from 'react';
import { contactSchema } from '../data/validationSchema';

const options = {
  abortEarly: false,
};

const formatErrors = (errors) => {
  return errors.reduce((acc, currentError) => {
    acc = {
      ...acc,
      [currentError.path]: currentError.message,
    };
    return acc;
  }, {});
};

const useFormValidation = async (form) => {
  try {
    await contactSchema.validate(form, options);
    return [null];
  } catch (error) {
    const errors = formatErrors(error.inner);
    console.error(errors);
    return [errors];
  }
};

export default useFormValidation;
