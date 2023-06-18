"use client"

import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailError === '') {
            setEmail('');
            setPassword('');
            alert('Successfully logged in');
        }
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
          setEmailError('Invalid email address');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="text" value={email} 
                        onChange={handleEmailChange}
                        onBlur={validateEmail}
                        className={`border ${emailError ? 'border-red-500' : 'border-black'} rounded-md p-2 w-full`}
                        />
                        {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input type="password" value={password}
                        onChange={handlePasswordChange}
                        className="border border-black rounded-md p-2 w-full"
                        />
                    </div>
                    <button type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
