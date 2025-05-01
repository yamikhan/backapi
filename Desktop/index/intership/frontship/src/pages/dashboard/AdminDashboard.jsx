import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Tableau de bord Administrateur
      </h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">Gestion des utilisateurs</h2>
            <p className="text-indigo-700">Gérez les comptes des formateurs, étudiants et entreprises</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green-900 mb-4">Validation des stages</h2>
            <p className="text-green-700">Supervisez et validez les conventions de stage</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">Rapports et statistiques</h2>
            <p className="text-purple-700">Consultez les statistiques et générez des rapports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;