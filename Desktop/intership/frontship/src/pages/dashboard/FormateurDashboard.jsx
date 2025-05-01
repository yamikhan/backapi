import { useAuth } from '../../contexts/AuthContext';

const FormateurDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Tableau de bord Formateur
      </h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Suivi des étudiants</h2>
            <p className="text-blue-700">Supervisez les stages et le progrès de vos étudiants</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-amber-900 mb-4">Évaluation des stages</h2>
            <p className="text-amber-700">Évaluez les rapports et les présentations de stage</p>
          </div>
          <div className="bg-lime-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-lime-900 mb-4">Communication</h2>
            <p className="text-lime-700">Échangez avec les étudiants et les entreprises</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormateurDashboard;