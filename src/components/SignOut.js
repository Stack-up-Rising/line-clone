import React from 'react';
import { auth } from '../firebase';
import { Button } from '@material-ui/core';

export default function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  );
}

