import React from 'react';
import './SignUpScreen.css';

const SignUpScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input type='email' placeholder='email' />
        <input placeholder='password' type='password' />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>
          <br />
          <span className='signupScreen__link' onClick={register}>
            Sign up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
