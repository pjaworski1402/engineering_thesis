"use client";

import React, { useEffect, createContext, useContext, useState } from 'react';
import { getUser } from '../api/strapiQueries'; // Importuj funkcję getUser z poprzedniego przykładu
import { useSession } from "next-auth/react";

// Utwórz kontekst dla danych użytkownika
const UserContext = createContext();

// Komponent dostarczający danych użytkownika do kontekstu
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { data } = useSession();

  useEffect(() => {
    // Pobierz dane użytkownika po montażu komponentu
        if(data?.jwt){
        getUser(data?.jwt)
        .then((userData) => {
          setUser(userData);
          setLoading(false); // Ustaw isLoading na false, gdy dane są dostępne
        })
        .catch((error) => {
          console.error('Błąd pobierania danych użytkownika:', error);
          setLoading(false); // Ustaw isLoading na false w przypadku błędu
        });
    }
  }, [data]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Hook do pobierania danych użytkownika z kontekstu
export const useUser = () => {
  const user = useContext(UserContext);
  if (user === null) {
    return null
    // throw new Error('Komponent próbuje użyć danych użytkownika przed ich załadowaniem.');
  }
  return user;
};
