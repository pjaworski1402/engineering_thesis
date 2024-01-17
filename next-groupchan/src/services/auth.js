import axios from 'axios';
import { apiVars } from '@/api/strapiQueries';

export async function signIn({ email, password }) {
  const res = await axios.post(`${apiVars.API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });
  const config = {
    headers: {
      'Authorization': `Bearer ${res.data.jwt}`,
    },
  };
  const userInfo = axios.get(`${apiVars.API_URL}/api/users/me`, config)
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