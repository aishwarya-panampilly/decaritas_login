import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profiledecari.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

import styles from '../styles/Username.module.css';


export default function Recovery() {

  return (
    <div className="container mx-auto">

      <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
      <div className = 'flex h-screen justify-center items-center'>
      <div className = {styles.glass}>

        <div className = "title flex flex-col items-center">
          <h4 className = 'text-5xl font-bold'>Recovery</h4>
          <span className = 'py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter OTP to recover password
          </span>
          </div>

          <form className = 'pt-20'>
            
              <div className = "textbox flex flex-col items-center gap-6">

                <div className= "input text-center">
                  <span className = 'py-4 text-sm text-left text-gray-500'>Enter 6 Digit OTP send to email address</span>
                  <input className = {styles.textbox} type = "password" placeholder = 'OTP' />
                </div>
                <button className = {styles.btn} type = 'submit'> Sign In </button>
              </div>
              <div className = "text-center py-4">
                <span className = 'text-gray-500'>Can't get OTP?<button className = 'text-red-500'>Resend</button></span>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}