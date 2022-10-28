const pxToRem = (dataToConvert) => {
  return (dataToConvert * 0.063).toFixed(2) + 'rem';
};

export default pxToRem;
