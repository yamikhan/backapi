import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Plateforme de Gestion des Stages
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une solution complète pour gérer efficacement les stages, connectant étudiants, 
              formateurs et entreprises dans un environnement collaboratif.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/login/etudiant"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Espace Étudiant
              </Link>
              <Link
                to="/login/entreprise"
                className="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200"
              >
                Espace Entreprise
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont vous avez besoin pour gérer les stages
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  Pour les étudiants
                </div>
                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p>Trouvez facilement des stages, gérez vos candidatures et suivez votre progression.</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  Pour les formateurs
                </div>
                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p>Supervisez les stages, évaluez les rapports et accompagnez vos étudiants.</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  Pour les entreprises
                </div>
                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p>Publiez des offres, gérez les candidatures et suivez vos stagiaires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;