import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validate={({ username, password }) => {
                const errors = {};
                if (!username) errors.username = 'Username Required';
                if (!password) errors.password = 'Password Required';
                return errors;
            }}
            onSubmit={(values) => {
                if (values.username === 'admin' && values.password === 'admin@123') {
                    localStorage.setItem('session', 'true');
                    setIsLoggedIn(true); 
                    navigate('/invoice'); 
                } else {
                    alert('Invalid credentials');
                }
            }}
        >
            {({ errors, touched }) => (
                <Form
                    style={{
                        maxWidth: '400px',
                        margin: '50px auto',
                        padding: '20px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        fontFamily: 'Arial, sans-serif',
                    }}
                >
                    <div style={{ marginBottom: '15px' }}>
                        <label
                            style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontWeight: 'bold',
                            }}
                        >
                            Username
                        </label>
                        <Field
                            name="username"
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                        {errors.username && touched.username && (
                            <div style={{ color: 'red', marginTop: '5px' }}>
                                {errors.username}
                            </div>
                        )}
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label
                            style={{
                                display: 'block',
                                marginBottom: '5px',
                                fontWeight: 'bold',
                            }}
                        >
                            Password
                        </label>
                        <Field
                            name="password"
                            type="password"
                            style={{
                                width: '100%',
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                        {errors.password && touched.password && (
                            <div style={{ color: 'red', marginTop: '5px' }}>
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;