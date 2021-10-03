const dogURL = 'http://localhost:3000/dogs';
const catURL = 'http://localhost:3000/cats';
const usersURL = 'http://localhost:3000/users';
const robotsURL = 'http://localhost:3000/robots';

function submitData(userName, userEmail) {
  fetch(usersURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  });
}
