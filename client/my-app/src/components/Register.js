import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profiledecari.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64  from '../helper/convert';
import { registerUser } from '../helper/helper'
import styles from '../styles/Username.module.css';


export default function Register() {

  const [file, setFile] = useState()
  const navigate = useNavigate();
  const  formik = useFormik({
    initialValues : {
      email : '',
      username : '',
      wallet : '',
      password : ''
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnCharge: false,
    onSubmit : async values => {
      values = await Object.assign(values, {profile : file  || ''})
      let registerPromise = registerUser(values)
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success : <b>Register Successfully...!</b>,
        error : <b>Could not Register.</b>
      });
      registerPromise.then(function(){ navigate('/')});
    }
  })

  /** formik doesnt support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">

      <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
      <div className = 'flex h-screen justify-center items-center'>
      <div className = {styles.glass} style={{width : "45%"}}>
        <div className = "title flex flex-col items-center" style={{ marginTop: '-50px' }}>
          <h4 className = 'text-5xl font-bold'>Register</h4>
          </div>

          <form className = 'py-1' onSubmit={formik.handleSubmit}>
              <div className = 'profile flex justify-center py-4'>
                <label htmlFor="">
                  <img src={file || avatar} className = {styles.profile_img} alt = "avatar" />
                </label>

                <input onChange={onUpload} type="file" id='profile' name ='profile'/>
              </div>
              
              <div className = "textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('email')} className = {styles.textbox} type = "text" placeholder = 'Email' />
                <input {...formik.getFieldProps('username')} className = {styles.textbox} type = "text" placeholder = 'Username' />
                <input {...formik.getFieldProps('wallet')} className = {styles.textbox} type = "password" placeholder = 'Wallet Address' />
                <input {...formik.getFieldProps('password')} className = {styles.textbox} type = "password" placeholder = 'Password' />
                <button className = {styles.btn} type = 'submit'> Sign In </button>
              </div>
              <div className = "text-center py-4">
                <span className = 'text-gray-500'>Already Registered?<Link className = 'text-red-500' to = "/username">Login</Link></span>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}
