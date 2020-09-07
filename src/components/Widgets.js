import React from 'react';

const Widgets = () => {
  return (
    <div>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='340'
        height='100%'
        scrolling='no'
        style={{ border: 'none', overflow: 'hidden' }}
        allow='encrypted-media'
        title='facebook'
      ></iframe>
    </div>
  );
};

export default Widgets;
