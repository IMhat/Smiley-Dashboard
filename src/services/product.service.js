import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products");
  }
  
  getGaming() {
    return http.get("/products/gaming");
  }
  
  getCursos() {
    return http.get("/products/cursos");
  }
  
  getIndumentaria() {
    return http.get("/products/indumentaria");
  }

  get(id) {
    console.log(`trying to get ${id}`);
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(title) {
    return http.get(`/products?title=${title}`);
  }
}

export default new ProductDataService();