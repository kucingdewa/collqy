export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient fixed-top">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          <i className="fas fa-gem me-2"></i>
          Collqy
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav2"
          aria-controls="navbarNav2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav2">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light ms-lg-2 mt-2 mt-lg-0" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

	
