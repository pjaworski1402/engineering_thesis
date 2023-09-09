
import axios from 'axios';

const strapiUrl = process.env.API_URL;

export async function signIn({ email, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  const config = {
    headers: {
      'Authorization': `Bearer ${res.data.jwt}`,
    },
  };
  const userInfo = axios.get(`${strapiUrl}/api/users/me`, config)
  .then(response => {
    console.log('Odpowiedź API:', response.data);
  })
  .catch(error => {
    console.error('Błąd zapytania:', error.response.data);
  });
  console.log(res.data)
  res.data.user.name = res.data.user.username
  return res.data;
}