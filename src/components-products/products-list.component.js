import React, { Component } from "react";
import ProductDataService from "../services/product.service";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.retrieveGaming = this.retrieveGaming.bind(this);
    this.retrieveIndumentaria = this.retrieveIndumentaria.bind(this);
    this.retrieveCursos = this.retrieveCursos.bind(this);

    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = {
      product_gaming: [],
      product_indumentaria: [],
      product_cursos: [],
      currentProduct: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveGaming();
    this.retrieveIndumentaria();
    this.retrieveCursos();
  }

  retrieveGaming() {
    ProductDataService.getGaming()
      .then(response => {
        this.setState({
            product_gaming: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveIndumentaria() {
    ProductDataService.getIndumentaria()
      .then(response => {
        this.setState({
            product_indumentaria: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveCursos() {
    ProductDataService.getCursos()
      .then(response => {
        this.setState({
            product_cursos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveGaming();
    this.retrieveIndumentaria();
    this.retrieveCursos();
    this.setState({
      currentProduct: null,
      currentIndex: -1,
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index,
    });
  }  

  removeAllProducts() {
    ProductDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProduct() {    
    ProductDataService.delete(this.state.currentProduct.id)
      .then(response => {
        console.log(response.data);
        this.refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { product_gaming, product_indumentaria, product_cursos, currentProduct, currentIndex} = this.state;

    return (
      <div className="list row">
          
        <div className="col-md-3">
          <div className="d-flex justify-content-between align-items-center">            
            <h4>Gaming</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/products"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {product_gaming &&
              product_gaming.map((product, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && product === currentProduct)? "active" : "")
                  }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.title}
                </li>
                
              ))}
          </ul></div>

        <div className="col-md-3">

          <div className="d-flex justify-content-between align-items-center">            
            <h4>Indumentaria</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/products"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {product_indumentaria &&
              product_indumentaria.map((product, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && product === currentProduct)? "active" : "")
                  }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.title}
                  
                </li>
                
              ))}
              
          </ul>
          </div>
        <div className="col-md-3">

          <div className="d-flex justify-content-between align-items-center">            
            <h4>Cursos</h4>
            <Link
                className="btn-sm btn-secondary"
                to={"/add/products"}
              >
                  +
            </Link>
          </div>

          <ul className="list-group">
            {product_cursos &&
              product_cursos.map((product, index) => (
                <li
                  className={
                    "list-group-item " +
                    ((index === currentIndex && product === currentProduct)? "active" : "")
                  }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.title}
                  
                </li>
              ))}
          </ul>
          
        </div>
        <div className="col-md-3">
          {currentProduct ? (
            <div>
              <h4>Product</h4>
              
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentProduct.title}
              </div>

              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentProduct.type}
              </div>

              {/* <div>
                <label>
                  <strong>Assigned to:</strong>
                </label>{" "}
                {currentTask.user}
              </div> */}

              {currentProduct.description &&
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentProduct.description}
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
                {currentProduct.points}
              </div>

              <div>
                <label>
                  <strong>Updated:</strong>
                </label>{" "}
                {currentProduct.updatedAt.replace(/T/, ' ').replace(/\..+/, '')}
              </div>

              <div>
                <label>
                  <strong>Created:</strong>
                </label>{" "}
                {currentProduct.createdAt.replace(/T/, ' ').replace(/\..+/, '')}
              </div>

              <Link
                to={"/products/" + currentProduct.id}
                className="badge badge-warning"
              >
                Edit
              </Link>

              <button
              className="badge badge-danger" id="del-on-list"
              onClick={this.deleteProduct}
            >
              Delete
            </button>

            </div>
          ) : (
            <div>
              <br />
              <p>Select a Product...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}