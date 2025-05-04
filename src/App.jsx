import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('session') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('session') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return(
   <Router>
    <Routes> 
      <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/invoice' element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={isLoggedIn ? "/invoice" : "/login"} />} />
    </Routes>
   </Router>
  )
}
 

export default App
