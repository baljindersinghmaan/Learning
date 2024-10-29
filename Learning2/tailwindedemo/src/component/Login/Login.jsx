import React, { useState } from 'react';
import loginImg from '../../assets/login.png';
import platformImg from '../../assets/platforms.png';
import logo from '../../assets/logo.png';

import gear_icon from '../../assets/gear_icon.png';


import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        navigate('/home'); // Navigate to Home component
      };
   
  return (
    <div>
        <div className="flex">
            
        <div className="w-2/5 bg-gray-100 flex justify-center items-center h-screen flex-col">
        
        <img src={logo} alt="Logo" className="h-12 w-auto self-start ml-2 rounded-full" />
          <p className="font-sans text-2xl font-semibold">Hi, Welcome back</p>
          <p className="font-sans text-sm text-gray-500 m-5">More effectively with optimized workflows.</p>
          <img src={loginImg} alt="Login" className="h-96 w-auto" />


          <img src={platformImg} alt="Platforms" className="h-30"  />
        </div>

        {/* Login form */}
        <div className="w-3/5 bg-white flex justify-center items-center h-screen flex-col">
        
        <div className="flex space-x-2 absolute top-0 right-0 mt-4 mr-4">
        <p className="font-semibold items-center content-evenly text-gray-600">Need Help?</p>
        <img src={gear_icon} alt="Google Logo" className="h-5 w-auto filter grayscale"  />
        </div>
        <div>
        <p className="font-sans text-lg text-black font-bold">Sign in to your account</p>
        
        <p className="font-sans text-sm text-gray-500 mt-5">
            Don’t have an account? <span className="text-green-500 cursor-pointer">Get started</span>
        </p>
        </div>
        <form className="mt-8 space-y-6 w-96" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-5">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none h-12 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none h-12 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-green-600 hover:text-green-500">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <button
                
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Sign in
                </button>
            </div>
        </form>
        </div>
        </div>

    </div>
  )
}
