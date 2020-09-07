import React from 'react';

const MessageOption = ({ Icon, color, message }) => {
  return (
    <div className='message-sender-option'>
      <Icon style={{ color: color }} />
      <h3>{message}</h3>
    </div>
  );
};

export default MessageOption;
