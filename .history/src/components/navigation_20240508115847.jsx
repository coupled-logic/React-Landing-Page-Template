import React from "react";

export const Navigation = (props) => {
  return (
  <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ backgroundColor: 'var(--navy)' }}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            React Landing Page
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" style={{ color: 'var(--beige)' }}>

                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" style={{ color: 'var(--beige)' }}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" style={{ color: 'var(--beige)' }}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" style={{ color: 'var(--beige)' }}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" style={{ color: 'var(--beige)' }}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" style={{ color: 'var(--beige)' }}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
