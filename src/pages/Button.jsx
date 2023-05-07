import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-800 hover:text-white text-Black font-bold py-2 px-10">
      {children}
    </button>
  );
}

export default Button;
