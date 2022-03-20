// Reactでのユーザー認証
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import './App.css';
import Line from './components/Line';
import SignIn from './components/SignIn';

export default function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Line /> : <SignIn />}</div>;
}
