// Toggle between Registration and Login forms
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  });
  
  document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
  });
  
// Registration form submission
document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate Confirm Password
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return; // Stop form submission
    }
  
    // Continue if validation passes
    if (name && email && password) {
      alert('Registration Successful!');
    } else {
      alert('Please fill out all fields!');
    }
  });
  
  
  // Login form submission
  document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    if (email && password) {
      alert('Login Successful!');
    } else {
      alert('Please fill out all fields!');
    }
  });
  