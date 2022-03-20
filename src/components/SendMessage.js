import React, { useState } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

export default function SendMessage() {
  const [message, setMessage] = useState('');
  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection('messages').add({
      text: message,
      photoURL,
      uid,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage('');
  }
  return (
    <div className='sendMsg'>
      <form onSubmit={sendMessage}>
        <Input
          style={{
            width: '78%',
            fontSize: '15px',
            fontWeight: '550',
            marginLeft: '5px',
            marginBottom: '-3px',
          }}
          placeholder='メッセージを入力して下さい'
          alt='text'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <SendIcon style={{ color: '#7AC2FF', marginLeft: '20px' }} />
      </form>
    </div>
  );
}
