const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; {new Date().getFullYear()} GestionStages. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:contact@gestionstages.com" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;