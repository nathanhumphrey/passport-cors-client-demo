/**
 * Posts a request with data to the desired endpoint.
 * @param {string} url the endpoint for the request
 * @param {Object} data the body of the request (e.g. form data)
 * @returns {Promise} returned JSON from the response
 */
const postData = async (url = '', data = {}) => {
  return await (
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // !! required to store the cookie from the response
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
  ).json();
};

document.addEventListener('submit', evt => {
  const baseURL = document.querySelector('#endpoint').value;
  const frm = evt.target;

  // determine which form was submitted
  switch (frm.className) {
    case 'frm-register':
      postData(`${baseURL}${frm.pathRegister.value}`, {
        email: frm.emailRegister.value,
        password: frm.passwordRegister.value
      }).then(data => {
        document.querySelector('.register-response').innerHTML = JSON.stringify(
          data
        );
      });
      break;
    case 'frm-login':
      postData(`${baseURL}${frm.pathLogin.value}`, {
        email: frm.emailLogin.value,
        password: frm.passwordLogin.value
      }).then(data => {
        document.querySelector('.login-response').innerHTML = JSON.stringify(
          data
        );
      });
      break;
    case 'frm-protected':
      fetch(`${baseURL}${frm.pathProtected.value}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include' // !! required to send cookies with the request
      })
        .then(res => res.json())
        .then(
          json =>
            (document.querySelector(
              '.protected-response'
            ).innerHTML = JSON.stringify(json))
        );

      break;
  }
  evt.preventDefault();
});
