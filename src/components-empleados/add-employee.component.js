import React, { Component } from "react";
import UserDataService from "../services/empleados.service"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEame.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeUserImage = this.onChangeUserImage.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.onChangePoints = this.onChangePoints.bind(this);
    // this.onChangePriority = this.onChangePriority.bind(this);
    // this.onChangeUser = this.onChangeUser.bind(this);
    

    this.saveEmployee = this.saveEmployee.bind(this);
    this.newEmployee = this.newEmployee.bind(this);

    this.state = {
      id: null,
      name: "",
      lastName: "",
      email: "",
      phone: "",
      userImage: "",
      type: "",
      points: 1,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChangeUserImage(e) {
    this.setState({
      userImage: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }



  onChangePoints(e) {
    this.setState({
      points: e.target.value
    });
  }


  saveEmployee() {
    var data = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      type: this.state.type,
      userImage: this.state.userImage,

      points: this.state.points
    };

    UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
          type: response.data.type,
          userImage: response.data.userImage,

          points: response.data.points,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEmployee() {
    this.setState({
      id: null,
      name: "",
      lastName: "",
      email: "",
      phone: "",
      type: "collaborators",
      userImage: "",
      points: 1,

      submitted: false
    });
  }

  render() {

    
    
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Employee added successfully!</h4>
            <Link
            className="btn btn-dark"
            to={"/employees"}
          >
              Back
            </Link>
            <button className="btn btn-primary" onClick={this.newEmployee}>
              Add Another
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">lastName</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                name="lastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>

            <div className="form-group">
            <label htmlFor="description">Type</label>
            <select
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
            >

                <option value="admins">admins</option>
                <option value="collaborators">collaborators</option>
                <option value="uteam">uteam</option>
            </select>
            </div>
  
            {/* <div className="form-group">
            <label htmlFor="description">Assign to</label>
            <input
                type="text"
                className="form-control"
                id="user"
                required
                value={this.state.user}
                onChange={this.onChangeUser}
                name="user"
            />
            </div> */}

            <div className="form-group">
            <label htmlFor="description">User Image</label>
            <input
                type="text"
                className="form-control"
                id="userImage"
                required
                value={this.state.userImage}
                onChange={this.onChangeUserImage}
                name="userImage"
            />
            </div>


  


  
            {/* <div className="form-group">
            <label htmlFor="description">Priority</label>
            <select
                type="text"
                className="form-control"
                id="priority"
                required
                value={this.state.priority}
                onChange={this.onChangePriority}
                name="priority"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            </div> */}

            <div className="form-group">
            <label htmlFor="description">Points</label>
            <input
                type="text"
                className="form-control"
                id="points"
                required
                value={this.state.points}
                onChange={this.onChangePoints}
                name="points"
            />
            </div>
            <Link
            className="btn btn-dark"
            to={"/employees"}
          >
              Back
            </Link>

            <button onClick={this.saveEmployee} className="btn btn-primary">
              Add
            </button>
          </div>
        )}
      </div>
    );
  }
}