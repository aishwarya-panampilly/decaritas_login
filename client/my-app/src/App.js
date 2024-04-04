import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/**import all components */
import SignInChoose from './components/SignInChoose';
import Username from './components/Username';
import Password from './components/Password';
import OrgUsername from './components/OrgUsername';
import OrgPassword from './components/OrgPassword';
import ValidatorUsername from './components/ValidatorUsername';
import ValidatorPassword from  './components/ValidatorPassword';
import Register from './components/Register';
import RegisterOrg from './components/RegisterOrg';
import RegisterValidator from './components/RegisterValidator';
import Profile from './components/Profile';
import ProfileOrg from './components/ProfileOrg';
import ProfileValildator from './components/ProfileValidator';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

/** auth middleware */

import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <SignInChoose></SignInChoose>
    },
    {
        path : '/username',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password></Password></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile></Profile></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
    {
        path : '/orgusername',
        element : <OrgUsername></OrgUsername>
    },
    {
        path : '/orgpassword',
        element : <OrgPassword></OrgPassword>
    },
    {
        path : '/validatorusername',
        element : <ValidatorUsername></ValidatorUsername>
    },
    {
        path : '/validatorpassword',
        element : <ValidatorPassword></ValidatorPassword>
    },
    {
        path : '/orgregister',
        element : <RegisterOrg></RegisterOrg>
    },
    {
        path : '/orgvalidator',
        element : <RegisterValidator></RegisterValidator>
    },
    {
        path : '/orgprofile',
        element : <ProfileOrg></ProfileOrg>
    },
    {
        path : '/validatorprofile',
        element : <ProfileValildator></ProfileValildator>
    },

])
export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

