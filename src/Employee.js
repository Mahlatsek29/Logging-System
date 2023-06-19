import React, { useEffect, useState } from 'react';
import './Employee.css';

const Employee = () => {
  const [record, setRecord] = useState([]);
  const [modeldata, setModeldata] = useState({
    id: '',
    userName: '',
    username: '',
    email: '',
    position: '',
    department: '',
  });



  const getData = () => {
    fetch('http://localhost:3000/employees')
      .then((response) => response.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const showDetail = (id) => {
    fetch(`http://localhost:3000/employees/${id}`)
      .then((response) => response.json())
      .then((res) => setModeldata(res));
  };

  const handleEdit = (employee) => {
    console.log('Editing employee:', employee);
  };

  const handleDelete = (employee) => {
    console.log('Deleting employee:', employee);
  };

  return (
    
    <div className="container mt-2">
      <div className="row mt-2">
        <div className="col-lg-1 col-md-6 col-sm-12"></div>
        <div className="col-lg-1 col-md-6 col-sm-12">
          <h5 className="mt-3 mb-3 text-secondary">More Employee Records</h5>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Show Details</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {record.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.userName}</td>
                    <td>{employee.username}</td>
                    <td>{employee.email}</td>
                    <td>{employee.position}</td>
                    <td>{employee.department}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => showDetail(employee.id)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Get Details
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit(employee)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(employee)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
