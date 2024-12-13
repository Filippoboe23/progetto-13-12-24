import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const InputGroup = ({ placeholder, buttonText }) => (
  <div className="input-group mt-3">
    <input type="text" className="form-control" placeholder={placeholder} aria-label={placeholder} />
    <div className="input-group-append">
      <button className="btn btn-outline-secondary btn-sm h-100">{buttonText}</button>
    </div>
  </div>
);

const Button = ({ className, type, children }) => (
  <button className={className} type={type}>
    {children}
  </button>
);

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src="../img/logo.png" alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </a>
                </li>
                <li>
                  <InputGroup placeholder="Search" buttonText="GO" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
