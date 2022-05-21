import React from 'react';
import GoogleIcon from '../../../images/social/Google_icon.png';
import FacebookIcon from '../../../images/social/Facebook-icon.png';
import GithubIcon from '../../../images/social/Github-icon.png';
import auth from '../../../Firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
      const navigate = useNavigate();

      let errorElement;
      if (error || error1) {
            errorElement = <p style={{color:'red'}}>Error: {error?.message} {error1.message}</p>
            
      }

      if (user || user1) {
            navigate('/home');
      }
      if (loading || loading1) {
            return <Loading></Loading>;
          }
          
      return (
            <div>
                  <div className='d-flex  align-item-center'>
                        <div style={{ height: '1px' }} className='bg-primary w-50 mt-4'></div>
                        <p className='mx-2 fs-4 '>or</p>
                        <div style={{ height: '1px' }} className='bg-primary w-50 mt-4'></div>
                  </div>
                  <p>{errorElement}</p>
                  <div>
                        <button
                              onClick={() => signInWithGoogle()}
                              className='w-100 btn btn-info my-2'>
                              <img src={GoogleIcon} className='px-2' alt="" />
                              <span>Google Sign In</span>
                        </button>
                        <button className='w-100 btn btn-info my-2'>
                              <img src={FacebookIcon} className='px-2' alt="" />
                              <span>Facebook Sign In</span>
                        </button>
                        <button 
                              onClick={()=> signInWithGithub()}
                              className='w-100 btn btn-info my-2'>
                              <img src={GithubIcon} className='px-2' alt="" />
                              <span>Github Sign In</span>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;