const scriptURL = 'https://script.google.com/macros/s/AKfycbzW7RC-p6T_fDsoV8MzJ3f33W80SzdWAxcS7K3eYV-i_Wj68bMz7igyFB-Wz_0mqzuH/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = '*Message sent succesfully*';
      setTimeout(function() {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});

/* Function To Redirect to given link */
const redirect = (url) => {
  let win = window.open(url, '_blank');
  win.focus;
};
typewriterConfig = ['Frontend Developer', true];
typewriter();
// Hello thisis just test 
