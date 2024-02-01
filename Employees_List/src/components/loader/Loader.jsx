import './loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <strong role="status">Page is Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
    </div>
  );
};

export default Loader;
