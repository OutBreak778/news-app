import React, { Component } from "react";
import N from "./N.png";
import { Link } from "react-router-dom";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid font-weight-bold">
            <Link className="navbar-brand h1" to="/">
              <img src={N} alt="" className="NPng" />
              Outbreak
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
