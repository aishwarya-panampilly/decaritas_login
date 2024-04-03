import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profiledecari.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

import styles from '../styles/Username.module.css';


export default function SignInChoose() {

  return (
    <div className="container mx-auto">

      <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
      <div className = 'flex h-screen justify-center items-center'>
      <div className = {styles.glass}>

        <div className = "title flex flex-col items-center">
          <h4 className = 'text-5xl font-bold'>Sign In</h4>
          </div>

          <form className = 'pt-20'>
            
              <div className = "textbox flex flex-col items-center gap-6">
                <Link className = {styles.btn} to = "/username"> Sign In as Donor</Link>
                <Link className = {styles.btn} to = "/orgusername"> Sign In as Organisation</Link>
                <Link className = {styles.btn} to = "/validatorusername"> Sign In as Validator</Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}