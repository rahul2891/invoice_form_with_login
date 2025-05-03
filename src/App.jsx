import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import InvoicePage from './pages/InvoicePage';

const App = () => {
  const isLoggedIn = localStorage.getItem('session')
  return(
   <Router>
    <Routes> 
      <Route path='/login' element={<LoginPage />} />
      <Route path='/invoice' element={isLoggedIn ? <InvoicePage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={isLoggedIn ? "/invoice" : "/login"} />} />
    </Routes>
   </Router>
  )
}
 

export default App
