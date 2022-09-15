import React, { Component } from "react";
// import { Link } from "react-router-dom";
import UserDataService from "../services/empleados.service";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeUserImage = this.onChangeUserImage.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangePoints = this.onChangePoints.bind(this);

    this.getEmployee = this.getEmployee.bind(this);
    //this.updatePublished = this.updatePublished.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
      currentEmployee: {
        id: null,
        name: "",
        lastName: "",
        email: "",
        phone: "",
        type: "collaborators",
        userImage: "",

        points: 1,
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getEmployee(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          name: name
        }
      };
    });
  }
  onChangeLastName(e) {
    const lastName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          lastName: lastName
        }
      };
    });
  }
  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          email: email
        }
      };
    });
  }
  onChangePhone(e) {
    const phone = e.target.value;

    this.setState(function(prevState) {
      return {
        currentEmployee: {
          ...prevState.currentEmployee,
          phone: phone
        }
      };
    });
  }



  onChangeType(e) {
    const type = e.target.value;
    
    this.setState(prevState => ({
      currentEmployee: {
        ...prevState.currentEmployee,
        type: type
      }
    }));
  }

  onChangeUserImage(e) {
    const userImage = e.target.value;
    
    this.setState(prevState => ({
      currentEmployee: {
        ...prevState.currentEmployee,
        userImage: userImage
      }
    }));
  }

//   onChangeUser(e) {
//     const user = e.target.value;
    
//     this.setState(prevState => ({
//       currentTask: {
//         ...prevState.currentTask,
//         user: user
//       }
//     }));
//   }

  onChangePoints(e) {
    const points = e.target.value;
    
    this.setState(prevState => ({
      currentEmployee: {
        ...prevState.currentEmployee,
        points: points
      }
    }));
  }

  getEmployee(id) {
    UserDataService.get(id)
      .then(response => {
        this.setState({
          currentEmployee: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateEmployee() {
    UserDataService.update(
      this.state.currentEmployee.id,
      this.state.currentEmployee
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Employee was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteEmployee() {    
    UserDataService.delete(this.state.currentEmployee.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/employees')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentEmployee } = this.state;

    return (
      <div>
        {currentEmployee ? (
          <div className="edit-form">
            <h4>Employee</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentEmployee.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">LastName</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={currentEmployee.lastName}
                  onChange={this.onChangeLastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentEmployee.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={currentEmployee.phone}
                  onChange={this.onChangePhone}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">type</label>
                <select
                type="text"
                className="form-control"
                id="type"
                required
                value={currentEmployee.type}
                onChange={this.onChangeType}
                >

                <option value="admins">admins</option>
                <option value="collaborators">collaborators</option>
                <option value="uteam">uteam</option>
             </select>
              </div>
              
              {/* <div className="form-group">
                <label htmlFor="title">Assign to</label>
                <input
                  type="text"
                  className="form-control"
                  id="user"
                  value={currentTask.user}
                  onChange={this.onChangeUser}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="userImage">user Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="userImage"
                  value={currentEmployee.userImage}
                  onChange={this.onChangeuserImage}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentEmployee.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              

              
              {/* <div className="form-group">
                <label htmlFor="priority">priority</label>
                <select
                type="text"
                className="form-control"
                id="priority"
                required
                value={currentTask.priority}
                onChange={this.onChangePriority}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
              </div> */}
              
              <div className="form-group">
                <label htmlFor="points">Points</label>
                <input
                  type="text"
                  className="form-control"
                  id="points"
                  value={currentEmployee.points}
                  onChange={this.onChangePoints}
                />
              </div>
            </form>
            
            <a href="/employees">
            <button
              type="submit"
              className="badge badge-dark mr-2"
            >
              Back
            </button></a>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteEmployee}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateEmployee}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Select a employee...</p>
          </div>
        )}
      </div>
    );
  }
}