const LoadingSpinner = ({ fullScreen = false }) => {
  const baseClasses = "flex items-center justify-center";
  const containerClasses = fullScreen ? `${baseClasses} h-screen` : baseClasses;

  return (
    <div className={containerClasses}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
};

export default LoadingSpinner;