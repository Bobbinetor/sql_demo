document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  fetch('js/credentials.json')
      .then(response => response.json())
      .then(credentials => {
          if (username === credentials.username && password === credentials.password) {
              document.getElementById('message').textContent = 'Login successful! In a real app, you would be redirected to another page.';
              document.getElementById('message').className = 'alert alert-success';
              window.location.href = 'query.html';
          } else {
              document.getElementById('message').textContent = 'Invalid username or password.';
              document.getElementById('message').className = 'alert alert-danger';
          }
      });
});