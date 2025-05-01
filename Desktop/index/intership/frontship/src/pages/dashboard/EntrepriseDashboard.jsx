import { useAuth } from '../../contexts/AuthContext';

const EntrepriseDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Tableau de bord Entreprise
      </h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-teal-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-teal-900 mb-4">Offres de stage</h2>
            <p className="text-teal-700">Gérez vos offres de stage publiées</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-pink-900 mb-4">Candidatures</h2>
            <p className="text-pink-700">Consultez les candidatures reçues</p>
          </div>
          <div className="bg-violet-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-violet-900 mb-4">Stagiaires actuels</h2>
            <p className="text-violet-700">Suivez vos stagiaires en cours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseDashboard;