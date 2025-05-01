import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminLogin from './pages/login/AdminLogin';
import FormateurLogin from './pages/login/FormateurLogin';
import StudentLogin from './pages/login/StudentLogin';
import EntrepriseLogin from './pages/login/EntrepriseLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import FormateurDashboard from './pages/dashboard/FormateurDashboard';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import EntrepriseDashboard from './pages/dashboard/EntrepriseDashboard';
import { useAuth } from './contexts/AuthContext';

// Composant pour rediriger vers le dashboard approprié si déjà connecté
const LoginRedirect = ({ children }) => {
  const { user, role } = useAuth();
  if (user && role) {
    return <Navigate to={`/dashboard/${role}`} replace />;
  }
  return children;
};

function App() {
  return (
    <ErrorBoundary>
      <NotificationProvider>
        <AuthProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Toaster position="top-right" />
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  
                  {/* Routes de connexion avec redirection si déjà connecté */}
                  <Route 
                    path="/login/admin" 
                    element={
                      <LoginRedirect>
                        <AdminLogin />
                      </LoginRedirect>
                    } 
                  />
                  <Route 
                    path="/login/formateur" 
                    element={
                      <LoginRedirect>
                        <FormateurLogin />
                      </LoginRedirect>
                    } 
                  />
                  <Route 
                    path="/login/etudiant" 
                    element={
                      <LoginRedirect>
                        <StudentLogin />
                      </LoginRedirect>
                    } 
                  />
                  <Route 
                    path="/login/entreprise" 
                    element={
                      <LoginRedirect>
                        <EntrepriseLogin />
                      </LoginRedirect>
                    } 
                  />
                  
                  {/* Routes protégées des tableaux de bord */}
                  <Route 
                    path="/dashboard/admin" 
                    element={
                      <ProtectedRoute allowedRoles={['admin']}>
                        <AdminDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/dashboard/formateur" 
                    element={
                      <ProtectedRoute allowedRoles={['formateur']}>
                        <FormateurDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/dashboard/etudiant" 
                    element={
                      <ProtectedRoute allowedRoles={['etudiant']}>
                        <StudentDashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/dashboard/entreprise" 
                    element={
                      <ProtectedRoute allowedRoles={['entreprise']}>
                        <EntrepriseDashboard />
                      </ProtectedRoute>
                    } 
                  />

                  {/* Route catch-all pour les URLs invalides */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

export default App;
