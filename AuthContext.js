import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [userCarreer, setUserCarreer] = useState('');

  const updateUserId = (newUserId) => {
    setUserId(newUserId);
  };

  const updateUserCarreer = (newUserCarreer) => {
    setUserCarreer(newUserCarreer);
  };

  return (
    <AuthContext.Provider value={{ userId, userCarreer, updateUserId, updateUserCarreer }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
