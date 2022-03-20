import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';
import { Button } from '@material-ui/core';

export default function SignIn() {
  // Googleアカウントログイン実装
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleアカウントでログインする</Button>
    </div>
  );
}
