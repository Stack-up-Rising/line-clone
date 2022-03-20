import React from 'react';
import { auth } from '../firebase';
import { Button } from '@material-ui/core';
import CallIcon from '@mui/icons-material/Call';

export default function SignOut() {
  return (
    <div className='header'>
      <Button
        style={{ color: 'white', fontSize: '15px' }}
        onClick={() => auth.signOut()}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
}
