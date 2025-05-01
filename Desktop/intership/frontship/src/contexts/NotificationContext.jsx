import { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const showSuccess = (message) => {
    toast.success(message);
  };

  const showError = (message) => {
    toast.error(message);
  };

  const showLoading = (message) => {
    return toast.loading(message);
  };

  const dismissToast = (toastId) => {
    toast.dismiss(toastId);
  };

  return (
    <NotificationContext.Provider value={{ showSuccess, showError, showLoading, dismissToast }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification doit être utilisé à l\'intérieur d\'un NotificationProvider');
  }
  return context;
};