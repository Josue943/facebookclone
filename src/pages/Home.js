import React from 'react';

import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import Feed from '../components/Feed';

const Home = () => (
  <div className='container'>
    <Sidebar />
    <Feed />
    <Widgets />
  </div>
);

export default Home;
