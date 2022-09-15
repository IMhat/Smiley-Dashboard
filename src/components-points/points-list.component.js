import React, { Component } from "react";
import PointDataService from "../services/point.service";
import { Link } from "react-router-dom";

export default class PointsList extends Component {
  constructor(props) {
    super(props);

    this.retrieveAdmins = this.retrieveAdmins.bind(this);
    this.retrieveCollaborators = this.retrieveCollaborators.bind(this);
    this.retrieveUteam = this.retrieveUteam.bind(this);

    this.refreshList = this.refreshList.bind(this);
    this.setActivePoint = this.setActivePoint.bind(this);
    this.removeAllPoints = this.removeAllPoints.bind(this);
    this.deletePoint = this.deletePoint.bind(this);

    this.state = {
      point_admins: [],
      point_collaborators: [],
      point_uteam: [],
      currentPoint: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveAdmins();
    this.retrieveCollaborators();
    this.retrieveUteam();
  }

  retrieveAdmins() {
    PointDataService.getAdmins()
      .then(response => {
        this.setState({
            point_admins: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveCollaborators() {
    PointDataService.getCollaborators()
      .then(response => {
        this.setState({
            point_collaborators: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveUteam() {
    PointDataService.getUteam()
      .then(response => {
        this.setState({
            point_uteam: response.data
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
      currentPoint: null,
      currentIndex: -1,
    });
  }

  setActivePoint(point, index) {
    this.setState({
      currentPoint: point,
      currentIndex: index,
    });
  }  

  removeAllPoints() {
    PointDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePoint() {    
    PointDataService.delete(this.state.currentPoint.id)
      .then(response => {
        console.log(response.data);
        this.refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { point_admins, point_collaborators, point_uteam, currentPoint, currentIndex} = this.state;

    return (
      <div className="list row">
          
        <div className="col-md-3">
          <div className="d-flex justify-content-between align-items-center">            
            <h4>Admins</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/points"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {point_admins &&
              point_admins.map((point, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && point === currentPoint)? "active" : "")
                  }
                  onClick={() => this.setActivePoint(point, index)}
                  key={index}
                >
                  {point.name}
                </li>
                
              ))}
          </ul></div>

        <div className="col-md-3">

          <div className="d-flex justify-content-between align-items-center">            
            <h4>Collaborators</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/points"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {point_collaborators &&
              point_collaborators.map((point, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && point === currentPoint)? "active" : "")
                  }
                  onClick={() => this.setActivePoint(point, index)}
                  key={index}
                >
                  {point.name}
                  
                </li>
                
              ))}
              
          </ul>
          </div>
        <div className="col-md-3">

          <div className="d-flex justify-content-between align-items-center">            
            <h4>Uteam</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/points"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {point_uteam &&
              point_uteam.map((point, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && point === currentPoint)? "active" : "")
                  }
                  onClick={() => this.setActivePoint(point, index)}
                  key={index}
                >
                  {point.name}
                  
                </li>
              ))}
          </ul>
          
        </div>
        <div className="col-md-3">
          {currentPoint ? (
            <div>
              <h4>Point</h4>
              
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentPoint.name}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentPoint.email}
              </div>

              <div>
                <label>
                  <strong>Phone:</strong>
                </label>{" "}
                {currentPoint.phone}
              </div>

              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentPoint.type}
              </div>

              {/* <div>
                <label>
                  <strong>Assigned to:</strong>
                </label>{" "}
                {currentTask.user}
              </div> */}

              {currentPoint.description &&
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentPoint.description}
              </div>
              }



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
                {currentPoint.points}
              </div>

              <div>
                <label>
                  <strong>Updated:</strong>
                </label>{" "}
                {currentPoint.updatedAt.replace(/T/, ' ').replace(/\..+/, '')}
              </div>

              <div>
                <label>
                  <strong>Created:</strong>
                </label>{" "}
                {currentPoint.createdAt.replace(/T/, ' ').replace(/\..+/, '')}
              </div>

              <Link
                to={"/points/" + currentPoint.id}
                className="badge badge-warning"
              >
                Edit
              </Link>

              <button
              className="badge badge-danger" id="del-on-list"
              onClick={this.deletePoint}
            >
              Delete
            </button>

            </div>
          ) : (
            <div>
              <br />
              <p>Select a Point...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}