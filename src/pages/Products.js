import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import AddProduct from "../components-products/add-product.component";
import Product from "../components-products/product.component";
import ProductsList from "../components-products/products-list.component";

class ProductPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-purple">
          <a href="/products" className="navbar-brand">
            Uteam- productos
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add/products"} className="nav-link">
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
            <Route exact path={["/", "/products"]} component={ProductsList} />
            <Route exact path="/add/products" component={AddProduct} />
            <Route path="/products/:id" component={Product} />
          </Switch>
        </div>
      </div>
      
    );
  }
}

export default ProductPage;