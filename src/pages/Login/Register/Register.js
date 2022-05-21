import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] =useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateToLogin = event => {
        navigate('/login');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        console.log(user);
        navigate('/home');
    }
    if (loading || updating) {
        return <Loading></Loading>;
      }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary text-center my-3'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" id="" placeholder='Your name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={()=>setAgree(!agree)} className='m-2' type="checkbox" name="terms" id="terms"/>
                <label className={agree? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label>

                <input className='bg-primary text-white mt-2' type="submit" value="Register" disabled={!agree}/>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;