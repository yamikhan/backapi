import { useAuth } from '../../contexts/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Tableau de bord Étudiant
      </h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-emerald-900 mb-4">Mon stage</h2>
            <p className="text-emerald-700">Consultez et gérez votre stage actuel</p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-cyan-900 mb-4">Offres de stage</h2>
            <p className="text-cyan-700">Parcourez les offres de stage disponibles</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-orange-900 mb-4">Documents</h2>
            <p className="text-orange-700">Gérez vos rapports et documents de stage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;