import React, { Component } from "react";
import UserDataService from "../services/empleados.service";
import { Link } from "react-router-dom";

export default class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.retrieveAdmins = this.retrieveAdmins.bind(this);
    this.retrieveCollaborators = this.retrieveCollaborators.bind(this);
    this.retrieveUteam = this.retrieveUteam.bind(this);

    this.refreshList = this.refreshList.bind(this);
    this.setActiveEmployee = this.setActiveEmployee.bind(this);
    this.removeAllEmployees = this.removeAllEmployees.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
      employee_admins: [],
      employee_collaborators: [],
      employee_uteam: [],
      currentEmployee: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveAdmins();
    this.retrieveCollaborators();
    this.retrieveUteam();
  }

  retrieveAdmins() {
    UserDataService.getAdmins()
      .then(response => {
        this.setState({
            employee_admins: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveCollaborators() {
    UserDataService.getCollaborators()
      .then(response => {
        this.setState({
            employee_collaborators: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveUteam() {
    UserDataService.getUteam()
      .then(response => {
        this.setState({
            employee_uteam: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveAdmins();
    this.retrieveCollaborators();
    this.retrieveUteam();
    this.setState({
      currentEmployee: null,
      currentIndex: -1,
    });
  }

  setActiveEmployee(employee, index) {
    this.setState({
      currentEmployee: employee,
      currentIndex: index,
    });
  }  

  removeAllEmployees() {
    UserDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteEmployee() {    
    UserDataService.delete(this.state.currentEmployee.id)
      .then(response => {
        console.log(response.data);
        this.refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { employee_admins, employee_collaborators, employee_uteam, currentEmployee, currentIndex} = this.state;

    return (
      <div className="list row">
          
        <div className="col-md-3">
          <div className="d-flex justify-content-between align-items-center">            
            <h4>Admins</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/employees"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {employee_admins &&
              employee_admins.map((employee, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && employee === currentEmployee)? "active" : "")
                  }
                  onClick={() => this.setActiveEmployee(employee, index)}
                  key={index}
                >
                  {employee.name}
                </li>
                
              ))}
          </ul></div>

        <div className="col-md-3">

          <div className="d-flex justify-content-between align-items-center">            
            <h4>Collaborators</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/employees"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {employee_collaborators &&
              employee_collaborators.map((employee, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && employee === currentEmployee)? "active" : "")
                  }
                  onClick={() => this.setActiveEmployee(employee, index)}
                  key={index}
                >
                  {employee.name}
                  
                </li>
                
              ))}
              
          </ul>
          </div>
        <div className="col-md-3">

          <div className="d-flex justify-content-between align-items-center">            
            <h4>Uteam</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/employees"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {employee_uteam &&
              employee_uteam.map((employee, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && employee === currentEmployee)? "active" : "")
                  }
                  onClick={() => this.setActiveEmployee(employee, index)}
                  key={index}
                >
                  {employee.name}
                  
                </li>
              ))}
          </ul>
          
        </div>
        <div className="col-md-3">
          {currentEmployee ? (
            <div>
              <h4>Employee</h4>
              
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentEmployee.name}
              </div>
              <div>
                <label>
                  <strong>LastName:</strong>
                </label>{" "}
                {currentEmployee.lastName}
              </div>
              <div>
                <label>
                  <strong>email:</strong>
                </label>{" "}
                {currentEmployee.email}
              </div>
              <div>
                <label>
                  <strong>phone:</strong>
                </label>{" "}
                {currentEmployee.phone}
              </div>
              <div>
                <label>
                  <strong>userImage:</strong>
                </label>{" "}
                {currentEmployee.userImage}
              </div>

              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentEmployee.type}
              </div>

              {/* <div>
                <label>
                  <strong>Assigned to:</strong>
                </label>{" "}
                {currentTask.user}
              </div> */}




              {/* <div>
                <label>
                  <strong>Priority:</strong>
                </label>{" "}
                {currentTask.priority}
              </div> */}

              <div>
                <label>
                  <strong>Points:</strong>
                </label>{" "}
                {currentEmployee.points}
              </div>

              <div>
                <label>
                  <strong>Updated:</strong>
                </label>{" "}
                {currentEmployee.updatedAt.replace(/T/, ' ').replace(/\..+/, '')}
              </div>

              <div>
                <label>
                  <strong>Created:</strong>
                </label>{" "}
                {currentEmployee.createdAt.replace(/T/, ' ').replace(/\..+/, '')}
              </div>

              <Link
                to={"/employees/" + currentEmployee.id}
                className="badge badge-warning"
              >
                Edit
              </Link>

              <button
              className="badge badge-danger" id="del-on-list"
              onClick={this.deleteEmployee}
            >
              Delete
            </button>

            </div>
          ) : (
            <div>
              <br />
              <p>Select a Employee...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}