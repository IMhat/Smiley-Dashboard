import React, { Component } from "react";
import ProductDataService from "../services/product.service"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeProductImage = this.onChangeProductImage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePoints = this.onChangePoints.bind(this);
    // this.onChangePriority = this.onChangePriority.bind(this);
    // this.onChangeUser = this.onChangeUser.bind(this);
    

    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      title: "",
      type: "",
      productImage: "",
      description: "", 
      points: 1,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }

  onChangeProductImage(e) {
    this.setState({
      productImage: e.target.value
    });
  }

//   onChangeUser(e) {
//     this.setState({
//       user: e.target.value
//     });
//   }

  onChangePoints(e) {
    this.setState({
      points: e.target.value
    });
  }

  saveProduct() {
    var data = {
      title: this.state.title,
      type: this.state.type,
      productImage: this.state.productImage,
      description: this.state.description,
      points: this.state.points
    };

    ProductDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          type: response.data.type,
          productImage: response.data.productImage,
          description: response.data.description,
          points: response.data.points,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduct() {
    this.setState({
      id: null,
      title: "",
      type: "indumentaria",
      productImage: "",
      description: "",
      points: 1,

      submitted: false
    });
  }

  render() {

    
    
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Product added successfully!</h4>
            <Link
            className="btn btn-dark"
            to={"/products"}
          >
              Back
            </Link>
            <button className="btn btn-primary" onClick={this.newProduct}>
              Add Another
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
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

                <option value="gaming">gaming</option>
                <option value="indumentaria">indumentaria</option>
                <option value="cursos">cursos</option>
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
            <label htmlFor="description">Product Image</label>
            <input
                type="text"
                className="form-control"
                id="productImage"
                required
                value={this.state.productImage}
                onChange={this.onChangeProductImage}
                name="productImage"
            />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
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
            to={"/products"}
          >
              Back
            </Link>

            <button onClick={this.saveProduct} className="btn btn-primary">
              Add
            </button>
          </div>
        )}
      </div>
    );
  }
}