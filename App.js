import React, { useState } from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm from './Components/LoginForm/SignUpForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm onToggle={toggleForm} />
      ) : (
        <SignUpForm onToggle={toggleForm} />
      )}
    </div>
  );
}

export default App;