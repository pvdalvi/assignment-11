import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    designation: ""
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/employees/${id}`)
        .then((res) => setEmployee(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5000/employees/${id}`, employee);
    } else {
      await axios.post("http://localhost:5000/employees", employee);
    }
    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input
            type="number"
            className="form-control"
            name="id"
            value={employee.id}
            onChange={handleChange}
            required
            disabled={!!id}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          {id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
