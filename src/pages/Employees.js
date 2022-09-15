import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import AddEmployee from "../components-empleados/add-employee.component";
import Employee from "../components-empleados/employee.component";
import EmployeesList from "../components-empleados/employees-list.component";

class EmployeesPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-purple">
          <a href="/employees" className="navbar-brand">
            Uteam- Employees
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/employees"} className="nav-link">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add/employees"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
          <div class="me text-white">
          Built by
            <a class="text-white" href="https://github.com/IMhat"> Mateo Mansilla</a>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/employees"]} component={EmployeesList} />
            <Route exact path="/add/employees" component={AddEmployee} />
            <Route path="/employees/:id" component={Employee} />
          </Switch>
        </div>
      </div>
      
    );
  }
}

export default EmployeesPage;