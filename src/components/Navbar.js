import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Employee CRUD</Link>
        <div>
          <Link className="btn btn-success me-2" to="/add">Add Employee</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
