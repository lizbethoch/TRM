import React from 'react';
import './LoginForm.css';

const LoginForm = ( { onToggle }) => {
    return (
        <div className='auth-container'>
            <div className='auth-box'>
                <div className="logo">Finance App</div>
                <h2>Log in</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log in</button>
                </form>
                <button type="button" className="link-button forgot">Forgot password?</button>
                <p className="bottom-text">
                    Don’t have an account? 
                    <button type="button" className="link-button" onClick={onToggle}>Sign up</button>
                </p>

            </div>
        </div>
    );
};

export default LoginForm;
