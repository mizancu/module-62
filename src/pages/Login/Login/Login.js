import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateToRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else toast('Please enter your email address.')
    }
    let errorElement;
    if (error) {
        errorElement = <p style={{ color: 'red' }}>Error: {error?.message}</p>
    }

    if (loading || sending) {
        return <Loading></Loading>;
    }

    return (
        <div className='mx-auto container w-50'>
            <h2 className='text-primary text-center mt-2'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" required />
                </Form.Group>

                <Button className='w-100 my-2' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <>{errorElement}</>
            <p>New to Genius Car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link></p>
            <p>Forget password? <button className='btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
            <PageTitle title="Login"></PageTitle>
        </div>
    );
};

export default Login;