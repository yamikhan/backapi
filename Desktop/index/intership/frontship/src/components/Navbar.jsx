import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold">GestionStages</span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            {!user ? (
              <>
                <Link to="/login/admin" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                  Admin
                </Link>
                <Link to="/login/formateur" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                  Formateur
                </Link>
                <Link to="/login/etudiant" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                  Étudiant
                </Link>
                <Link to="/login/entreprise" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                  Entreprise
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Déconnexion
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;