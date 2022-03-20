import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut';

export default function Line() {
  // FirebaseよりDB情報を受け取る
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages')
      .orderBy('createAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className='msgs'>
        {messages.map(({ id, text, photoURL, uid }) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div
              key={id}
              className={`msg${
                uid === auth.currentUser.uid ? 'sent' : 'recived'
              }`}
            >
              <img src={photoURL} alt='' />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
