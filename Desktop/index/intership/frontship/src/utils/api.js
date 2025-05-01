import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token aux requêtes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs de réponse
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (email, password, role) => 
    api.post('/login', { email, password, role }),
  
  getCurrentUser: (role) => 
    api.get(`/user/${role}`),
};

export const stagesAPI = {
  getStages: () => 
    api.get('/stages'),
  
  getStageById: (id) => 
    api.get(`/stages/${id}`),
  
  createStage: (stageData) => 
    api.post('/stages', stageData),
  
  updateStage: (id, stageData) => 
    api.put(`/stages/${id}`, stageData),
  
  deleteStage: (id) => 
    api.delete(`/stages/${id}`),
};

export const userAPI = {
  getUsers: (role) => 
    api.get(`/users/${role}`),
  
  getUserById: (role, id) => 
    api.get(`/users/${role}/${id}`),
  
  createUser: (role, userData) => 
    api.post(`/users/${role}`, userData),
  
  updateUser: (role, id, userData) => 
    api.put(`/users/${role}/${id}`, userData),
  
  deleteUser: (role, id) => 
    api.delete(`/users/${role}/${id}`),
};

export default api;