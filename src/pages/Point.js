import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import AddPoint from "../components-points/add-point.component";
import Point from "../components-points/point.component";
import PointsList from "../components-points/points-list.component";

class PointsPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-purple">
          <a href="/points" className="navbar-brand">
            Uteam- Points
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/points"} className="nav-link">
                Points
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add/points"} className="nav-link">
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
            <Route exact path={["/", "/points"]} component={PointsList} />
            <Route exact path="/add/points" component={AddPoint} />
            <Route path="/points/:id" component={Point} />
          </Switch>
        </div>
      </div>
      
    );
  }
}

export default PointsPage;