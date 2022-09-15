import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PointDataService from "../services/point.service";

export default class Point extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePoints = this.onChangePoints.bind(this);


    this.getPoint = this.getPoint.bind(this);
    //this.updatePublished = this.updatePublished.bind(this);
    this.updatePoint = this.updatePoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);

    this.state = {
      currentPoint: {
        id: null,
        name: "",
        email: "",
        phone: "",
        type: "collaborators",
        description: "",
        points: 1,
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPoint(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPoint: {
          ...prevState.currentPoint,
          name: name
        }
      };
    });
  }
  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPoint: {
          ...prevState.currentPoint,
          email: email
        }
      };
    });
  }

  onChangePhone(e) {
    const phone = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPoint: {
          ...prevState.currentPoint,
          phone: phone
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentPoint: {
        ...prevState.currentPoint,
        description: description
      }
    }));
  }

  onChangeType(e) {
    const type = e.target.value;
    
    this.setState(prevState => ({
      currentPoint: {
        ...prevState.currentPoint,
        type: type
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
      currentPoint: {
        ...prevState.currentPoint,
        points: points
      }
    }));
  }

  getPoint(id) {
    PointDataService.get(id)
      .then(response => {
        this.setState({
          currentPoint: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePoint() {
    PointDataService.update(
      this.state.currentPoint.id,
      this.state.currentPoint
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The point was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePoint() {    
    PointDataService.delete(this.state.currentPoint.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/points')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPoint } = this.state;

    return (
      <div>
        {currentPoint ? (
          <div className="edit-form">
            <h4>Point</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentPoint.name}
                  onChange={this.onChangeName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentPoint.email}
                  onChange={this.onChangeEmail}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={currentPoint.phone}
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
                value={currentPoint.type}
                onChange={this.onChangeType}
                >

                <option value="admins">Admins</option>
                <option value="collaborators">Collaborators</option>
                <option value="uteam">Uteam</option>
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
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentPoint.description}
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
                  value={currentPoint.points}
                  onChange={this.onChangePoints}
                />
              </div>
            </form>
            
            <a href="/points">
            <button
              type="submit"
              className="badge badge-dark mr-2"
            >
              Back
            </button></a>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deletePoint}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePoint}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Select a point...</p>
          </div>
        )}
      </div>
    );
  }
}