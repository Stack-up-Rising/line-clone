import React from 'react';
import { auth } from '../firebase';
import { Button } from '@material-ui/core';
import CallIcon from '@mui/icons-material/Call';

export default function SignOut() {
  return (
    <div className='header'>
      <Button
        onClick={() => auth.signOut()}
        style={{ color: 'white', fontSize: '15px' }}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
}
