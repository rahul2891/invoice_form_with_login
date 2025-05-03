import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

  return (
    <Formik 
    initialValues={{username:'', password:''}}
    validate={({username, password}) => {
        const errors = {};
        if(!username) errors.username = 'Username Required'
        if(!password) errors.password = 'Password Required'
        return errors
    }}
    onSubmit={(values) => {
        if(values.username ==='admin' && values.password ==='admin'){
            localStorage.setItem('session', 'true')
            navigate('/invoice')
        } else {
            alert('Invalid credentials');
        }
    }}
    >
         {({ errors, touched }) => (
        <Form>
            <div>
                <label>Username</label>
                <Field name="username" />
                {errors.username && touched.username && <div>{errors.username}</div>}
            </div>
            <div>
                <label>Password</label>
                <Field name="password" />
                {errors.password && touched.password && <div>{errors.password}</div>}
            </div>
            <button type="submit">Login</button>
        </Form>
           )}
    </Formik>
  )
}

export default LoginForm