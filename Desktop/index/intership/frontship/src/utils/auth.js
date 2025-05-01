export const getStoredAuth = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token && role) {
    return { token, role };
  }
  return null;
};

export const clearStoredAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

export const setStoredAuth = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
};

export const isValidRole = (role) => {
  const validRoles = ['admin', 'formateur', 'etudiant', 'entreprise'];
  return validRoles.includes(role);
};