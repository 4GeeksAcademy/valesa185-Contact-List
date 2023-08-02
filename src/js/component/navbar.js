import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">
        <span className="navbar-brand  ms-4">
          <strong>CONTACT LIST </strong>
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/new">
          <button className="btn btn-success me-4">Add New Contact</button>
        </Link>
      </div>
    </nav>
  );
};
