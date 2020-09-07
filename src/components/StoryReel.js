import React from 'react';

import '../css/StoryReel.css';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className='story-reel'>
      <Story
        title='User'
        profileSrc='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        image='https://www.macleans.ca/wp-content/uploads/2019/10/MAC53_RANKINGS_PARTY_SCHOOLS-810x445.jpg'
      />
      <Story
        title='User'
        image='https://www.macleans.ca/wp-content/uploads/2019/10/MAC53_RANKINGS_PARTY_SCHOOLS-810x445.jpg'
        profileSrc='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      />
      <Story
        title='User'
        image='https://www.macleans.ca/wp-content/uploads/2019/10/MAC53_RANKINGS_PARTY_SCHOOLS-810x445.jpg'
        profileSrc='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      />
      <Story
        title='User'
        image='https://www.macleans.ca/wp-content/uploads/2019/10/MAC53_RANKINGS_PARTY_SCHOOLS-810x445.jpg'
        profileSrc='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      />
    </div>
  );
};

export default StoryReel;
