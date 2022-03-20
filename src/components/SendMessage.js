import React, { useState } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

// eslint-disable-next-line react/prop-types
export default function SendMessage({ scroll }) {
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
    // eslint-disable-next-line react/prop-types
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '5px',
              marginBottom: '-3px',
            }}
            placeholder='メッセージを入力'
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: '#7AC2FF', marginLeft: '20px' }} />
        </div>
      </form>
    </div>
  );
}
