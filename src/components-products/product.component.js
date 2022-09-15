import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ProductDataService from "../services/product.service";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeProductImage = this.onChangeProductImage.bind(this);


    this.onChangePoints = this.onChangePoints.bind(this);

    this.getProduct = this.getProduct.bind(this);
    //this.updatePublished = this.updatePublished.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = {
      currentProduct: {
        id: null,
        title: "",
        type: "indumentaria",
        description: "",
        productImage: "",

        points: 1,
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        description: description
      }
    }));
  }

  onChangeType(e) {
    const type = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        type: type
      }
    }));
  }

  onChangeProductImage(e) {
    const productImage = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        productImage: productImage
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
      currentProduct: {
        ...prevState.currentProduct,
        points: points
      }
    }));
  }

  getProduct(id) {
    ProductDataService.get(id)
      .then(response => {
        this.setState({
          currentProduct: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProduct() {
    ProductDataService.update(
      this.state.currentProduct.id,
      this.state.currentProduct
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The product was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProduct() {    
    ProductDataService.delete(this.state.currentProduct.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/products')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentProduct } = this.state;

    return (
      <div>
        {currentProduct ? (
          <div className="edit-form">
            <h4>Product</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentProduct.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">type</label>
                <select
                type="text"
                className="form-control"
                id="type"
                required
                value={currentProduct.type}
                onChange={this.onChangeType}
                >

                <option value="gaming">Gaming</option>
                <option value="indumentaria">Indumentaria</option>
                <option value="cursos">Cursos</option>
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
                <label htmlFor="productImage">Product Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="productImage"
                  value={currentProduct.productImage}
                  onChange={this.onChangeProductImage}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentProduct.description}
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
                  value={currentProduct.points}
                  onChange={this.onChangePoints}
                />
              </div>
            </form>
            
            <a href="/products">
            <button
              type="submit"
              className="badge badge-dark mr-2"
            >
              Back
            </button></a>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProduct}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProduct}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Select a product...</p>
          </div>
        )}
      </div>
    );
  }
}