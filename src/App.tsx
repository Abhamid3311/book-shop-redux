import { useEffect } from 'react';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import { useAppDispatch } from './redux/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { setLoading, setUser } from './redux/features/user/userSlice';


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false))
      }
    });
  }, [dispatch])

  return (
    <div>
      <MainLayout />
    </div>
  )
}

export default App
