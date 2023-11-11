import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState('');

  const updateUserId = (newUserId) => {
    setUserId(newUserId);
  };

  return (
    <AuthContext.Provider value={{ userId, updateUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
