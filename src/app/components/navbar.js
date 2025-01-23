// app/components/NavBar.jsx

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="#" className="navbar-brand">
          My Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#experience" className="nav-link">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

