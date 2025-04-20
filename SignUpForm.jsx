import React from 'react';
import './LoginForm.css';

const SignUpForm = ( { onToggle }) => {
    return (
        <div className='auth-container'>
            <div className='auth-box'>
                <div className="logo">Finance App</div>
                <h2>Sign up</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign up</button>
                </form>
                <p className="bottom-text">
                    Already have an account? 
                        <button type="button" className="link-button" onClick={onToggle}>Log in</button>
                </p>

            </div>
        </div>
    );
};

export default SignUpForm;
