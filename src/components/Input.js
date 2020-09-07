import React, { useRef, useEffect } from 'react';

const Input = ({ type = 'text', setEdit, ...rest }) => {
  const stopEditMode = e => {
    if (e === 27) setEdit();
  };

  const ref = useRef(null);

  const handleClick = e => {
    if (ref.current.contains(e.target)) return console.log('dentro');
    //click outside
    setEdit();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <input
      type={type}
      {...rest}
      onKeyDown={e => stopEditMode(e.keyCode)}
      ref={ref}
    />
  );
};

export default Input;
