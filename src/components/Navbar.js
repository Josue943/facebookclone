import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import '../css/Navbar.css';
import { auth } from '../firebase';
import { setTheme } from '../utility/theme';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [
    {
      user: { photoURL, displayName },
    },
  ] = useAuthContext();

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img
          src='https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png'
          alt='logo'
        />
        <div className='navbar-input'>
          <SearchIcon />
          <input type='text' placeholder='Search facebook' />
        </div>
      </div>
      <div className='navbar-middle'>
        <div className='navbar-option active'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='navbar-option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='navbar-option'>
          <StorefrontIcon fontSize='large' />
        </div>
        <div className='navbar-option'>
          <SubscriptionsIcon fontSize='large' />
        </div>
        <div className='navbar-option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>
      <div className='navbar-right'>
        <div className='navbar-info'>
          <Avatar src={photoURL} />
          <h4>{displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton onClick={setTheme}>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={() => auth.signOut()}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
