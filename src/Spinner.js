
import React from 'react';
import loading from './loading.gif'; // Ensure you have this image in the same directory

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} width="1cm" height="1cm"alt="loading" />
    </div>
  );
};

export default Spinner;
