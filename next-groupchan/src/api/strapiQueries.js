import axios from 'axios';

export async function getUser(jwtToken) {
  try {
    const response = await axios.get('http://localhost:1337/api/users/me?populate=*', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Błąd pobierania danych użytkownika');
    }
  } catch (error) {
    throw error;
  }
}

export async function getPublicGroups(jwtToken){
  try {
    const response = await axios.get('http://localhost:1337/api/groups?populate=*', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Błąd pobierania danych grup');
    }
  } catch (error) {
    throw error;
  }
}