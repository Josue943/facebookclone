import React, { useEffect, useRef } from 'react';

const CommentOptions = ({ setOpen, onDelete, onEdit }) => {
  const ref = useRef(null);

  const handleClick = e => {
    if (ref.current.contains(e.target)) return console.log('dentro');
    //click outside
    setOpen();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className='pop-up' ref={ref}>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default CommentOptions;
