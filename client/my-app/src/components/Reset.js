import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profiledecari.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate';

import styles from '../styles/Username.module.css';


export default function Reset() {

  const  formik = useFormik({
    initialValues : {
      password : '',
      confirm_pwd : ''
    },
    validate : resetPasswordValidation,
    validateOnBlur: false,
    validateOnCharge: false,
    onSubmit : async values => {
      console.log(values)
    }
  })
  return (
    <div className="container mx-auto">

      <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
      <div className = 'flex h-screen justify-center items-center'>
      <div className = {styles.glass}>

        <div className = "title flex flex-col items-center">
          <h4 className = 'text-5xl font-bold'>Reset</h4>
          <span className = 'py-4 text-xl w-2/3 text-center text-gray-500'>
            Enter new password
          </span>
          </div>

          <form className = 'py-20' onSubmit={formik.handleSubmit}>
              <div className = "textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('password')} className = {styles.textbox} type = "password" placeholder = 'New Password' />
                <input {...formik.getFieldProps('confirm_pwd')} className = {styles.textbox} type = "password" placeholder = 'Repeat Password' />
                <button className = {styles.btn} type = 'submit'> Sign In </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}