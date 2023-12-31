import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Email validation
    if (!validateEmail(username)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    if (!validatePassword(password)) {
        alert("Please enter a valid password.");
        return false;
    }

   
    return true;

    
}

function validateEmail(email) {
    // Email format validation
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        return false;
    }
    return true;
}

function validatePassword(password) {

  if (password === 'SmartServTest@123') {
  
    window.location.href = 'dashboard.html';
  } else {
    setErrorMessage('Incorrect password');
  }



  var hasUpperCase = false;
  var hasNumber = false;

  for (var i = 0; i < password.length; i++) {
      var char = password.charAt(i);

    
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
          hasUpperCase = true;
      }

   
      if (!isNaN(char)) {
          hasNumber = true;
      }

      // Check for special character other than '@'
      if (char !== '@' && isNaN(char) && char === char.toUpperCase() && char === char.toLowerCase()) {
          return false; // Exit early if any special character other than '@' is found
      }
  }

  // Ensuring that the password contains at least one uppercase letter and one number
  if (!hasUpperCase || !hasNumber) {
      return false;
  }

  
  return true;
}


  return (
    <div className="login-container">
      <form onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
        <img src="logo.png" alt="Company Logo" className="logo" />
        <div className="input-container">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="loginButton">
          Login
        </button>
        <p id="error-message">{errorMessage}</p>
        <a href="#" id="forgotPassword">
          Forgot your password?
        </a>
      </form>
    </div>
  );
};

export default LoginForm;