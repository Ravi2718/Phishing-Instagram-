document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const form = document.querySelector('form');
  const usernameInput = document.querySelector('input[name="username"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const loginBtn = document.querySelector('.login-btn');
  
  function checkInputs() {
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
      loginBtn.disabled = false;
      loginBtn.style.opacity = '1';
    } else {
      loginBtn.disabled = true;
      loginBtn.style.opacity = '0.7';
    }
  }
  
  usernameInput.addEventListener('input', checkInputs);
  passwordInput.addEventListener('input', checkInputs);
  
  // Initial check
  checkInputs();
  
  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate login (replace with actual authentication)
    alert('Login attempt recorded (demo only)\n\nUsername: ' + usernameInput.value);
    
    // Reset form
    form.reset();
    checkInputs();
  });
  
  // Language selector
  const languageSelect = document.querySelector('select[name="language"]');
  languageSelect.addEventListener('change', function() {
    console.log('Language changed to:', this.value);
  });
});
