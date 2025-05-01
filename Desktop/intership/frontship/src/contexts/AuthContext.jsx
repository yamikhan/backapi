import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../utils/api';
import { getStoredAuth, setStoredAuth, clearStoredAuth } from '../utils/auth';
import LoadingSpinner from '../components/LoadingSpinner';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = getStoredAuth();
    if (storedAuth) {
      authAPI.getCurrentUser(storedAuth.role)
        .then(response => {
          setUser(response.data);
          setRole(storedAuth.role);
        })
        .catch(() => {
          clearStoredAuth();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password, role) => {
    try {
      const response = await authAPI.login(email, password, role);
      const { user: userData, token } = response.data;
      setUser(userData);
      setRole(role);
      setStoredAuth(token, role);
      return true;
    } catch (error) {
      console.error('Erreur de connexion:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    clearStoredAuth();
  };

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <AuthContext.Provider value={{ user, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};