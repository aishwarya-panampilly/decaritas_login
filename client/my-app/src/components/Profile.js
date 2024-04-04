import React, { useState } from 'react'
import avatar from '../assets/profiledecari.png';
import toast,{ Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64  from '../helper/convert';
import useFetch from '../hooks/fetch.hook';
import { updateUser } from '../helper/helper'
import { useNavigate } from 'react-router-dom'

import styles from '../styles/Username.module.css';
import extend from '../styles/Profile.module.css'

export default function Profile() {

  const [file, setFile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate()
  const  formik = useFormik({
    initialValues : {
      firstName : apiData?.firstName || '',
      lastName : apiData?.lastName || '',
      email : apiData?.email || '',
      mobile : apiData?.mobile || '',
      address : apiData?.address || ''
    },
    validate : profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, {profile : file || apiData?.profile || ''})
      let updatePromise = updateUser(values);
      toast.promise(updatePromise, {
        loading: 'Updating...',
        success : <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>

      });


    }
  })

  /** formik doesnt support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  // logout handler function
  function userLogout(){
    localStorage.removeItem('token');
    navigate('/')
  }
    if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>
  return (
    <div className="container mx-auto">

      <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
      <div className = 'flex h-screen justify-center items-center'>
      <div className = {`${styles.glass} ${extend.glass}`} style={{width : "45%"}}>
        <div className = "title flex flex-col items-center" style={{ marginTop: '-50px' }}>
          <h4 className = 'text-5xl font-bold'>Profile</h4>
          </div>

          <form className = 'py-1' onSubmit={formik.handleSubmit}>
              <div className = 'profile flex justify-center py-4'>
                <label htmlFor="profile">
                  <img src={apiData?.profile || file || avatar} className = {`${styles.profile_img} ${extend.profile_img}`} alt = "avatar" />
                </label>

                <input onChange={onUpload} type="file" id='profile' name ='profile'/>
              </div>
              
              <div className = "textbox flex flex-col items-center gap-6">

                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('firstName')} className = {`${styles.textbox} ${extend.textbox}`} type = "text" placeholder = 'FirstName' />
                  <input {...formik.getFieldProps('lastName')} className = {`${styles.textbox} ${extend.textbox}`} type = "text" placeholder = 'LastName' />
                </div>

                <div className="name flex w-3/4 gap-10">
                  <input {...formik.getFieldProps('email')} className = {`${styles.textbox} ${extend.textbox}`} type = "text" placeholder = 'Email' />
                  <input {...formik.getFieldProps('mobile')} className = {`${styles.textbox} ${extend.textbox}`} type = "text" placeholder = 'Mobile' />
                </div>

                
                  <input {...formik.getFieldProps('address')} className = {`${styles.textbox} ${extend.textbox}`} type = "text" placeholder = 'Address' />
                  <button className = {styles.btn} type = 'submit'> Update </button>
            
              </div>
              <div className = "text-center py-4">
                <span className = 'text-gray-500'>Come back later?<button onClick={userLogout} className = 'text-red-500' to = "/username">Logout</button></span>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}
