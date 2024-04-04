import toast from 'react-hot-toast'
import { authenticate } from './helper'

/** validate login page username */
export async function usernameValidate(values) {
    const errors = usernameVerify({},values);
    if(values.username){
        // check user exist or not
        const { status } = await authenticate(values.username);
        if(status !== 200){
            errors.exist = toast.error('User does not exist...!')
        }
    }
    return errors;
}

/**validate password */
export async function passwordValidate(values) {
    const errors = passwordVerify ({},values);

    return errors;
}

/**validate organisation username */
export async function orgUsernameValidate(values) {
    const errors = orgUsernameVerify ({},values);

    return errors;
}

/**validate validator username */
export async function validUsernameValidate(values) {
    const errors = validUsernameVerify ({},values);

    return errors;
}

/**validate organisation password */
export async function orgPasswordValidate(values) {
    const errors = orgPasswordVerify ({},values);

    return errors;
}

/**validate validator password */
export async function validPasswordValidate(values) {
    const errors = validPasswordVerify ({},values);

    return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
    const errors = passwordVerify({},values);

    if(values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Passwords don't match");
    }

    return errors;
}

/**validate reigster form */
export async function registerValidation(values) {
    const errors = usernameVerify({},values);
    passwordVerify(errors,values);
    emailVerify(errors,values);

    return errors;
}

/**validate profile page */
export async function profileValidation(values) {
    const errors = emailVerify({}, values);
    return errors;
}

/** **************************************************************************************************************** */



/** validate password */
function passwordVerify(errors = {},values) {
    if(!values.password){
        errors.password = toast.error("Password Required");
    } else if (values.password.includes(" ")){
        errors.password = toast.error("Wrong Password");
    } 

    return errors;
}

/** validate username */
function usernameVerify(error = {}, values) {
    if(!values.username){
        error.username = toast.error('Username Required');
    }  else if (values.username.includes(" "))  {
        error.username = toast.error ('Invalid Username');
    }

    return error;
}

/** validate organisation username */
function orgUsernameVerify(error = {}, values) {
    if(!values.username){
        error.username = toast.error('Username Required');
    }  else if (values.username.includes(" "))  {
        error.username = toast.error ('Invalid Username');
    }

    return error;
}
/**validate verifier username */
function validUsernameVerify(error = {}, values) {
    if(!values.username){
        error.username = toast.error('Username Required');
    }  else if (values.username.includes(" "))  {
        error.username = toast.error ('Invalid Username');
    }

    return error;
}
/**validate organisation password */
function orgPasswordVerify(errors = {},values) {
    if(!values.password){
        errors.password = toast.error("Password Required");
    } else if (values.password.includes(" ")){
        errors.password = toast.error("Wrong Password");
    } 

    return errors;
}
/**validate verifier password */
function validPasswordVerify(errors = {},values) {
    if(!values.password){
        errors.password = toast.error("Password Required");
    } else if (values.password.includes(" ")){
        errors.password = toast.error("Wrong Password");
    } 

    return errors;
}

/**validate email */
function emailVerify(error = {},values) {
    if (!values.email) {
        error.email = toast.error("Email Required");
    } 
}