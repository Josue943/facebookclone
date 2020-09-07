import React from 'react';
import Button from '@material-ui/core/Button';

import '../css/Login.css';
import { auth, provider } from '../firebase';
import { createProfile } from '../api/profile';

const Login = () => {
  const signIn = async () => {
    try {
      const { user, additionalUserInfo } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) await createProfile(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <div className='login-logo'>
        <img
          src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
          alt=''
        />
        <img
          src='https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png'
          alt=''
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
