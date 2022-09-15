import http from "../http-common";

class PointDataService {
  getAll() {
    return http.get("/points");
  }
  
  getAdmins() {
    return http.get("/points/admins");
  }
  
  getCollaborators() {
    return http.get("/points/collaborators");
  }
  
  getUteam() {
    return http.get("/points/uteam");
  }

  get(id) {
    console.log(`trying to get ${id}`);
    return http.get(`/points/${id}`);
  }

  create(data) {
    return http.post("/points", data);
  }

  update(id, data) {
    return http.put(`/points/${id}`, data);
  }

  delete(id) {
    return http.delete(`/points/${id}`);
  }

  deleteAll() {
    return http.delete(`/points`);
  }

  findByEmail(email) {
    return http.get(`/points?email=${email}`);
  }
}

export default new PointDataService();