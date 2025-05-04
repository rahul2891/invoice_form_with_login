import React from 'react'
import './LoginPage.css'
import LoginForm from '../components/Auth/LoginForm'

const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <div className="centered-container">
      <h2>Login</h2>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default LoginPage