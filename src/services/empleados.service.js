import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/employees");
  }
  
  getAdmins() {
    return http.get("/employees/admins");
  }
  
  getCollaborators() {
    return http.get("/employees/collaborators");
  }
  
  getUteam() {
    return http.get("/employees/uteam");
  }

  get(id) {
    console.log(`trying to get ${id}`);
    return http.get(`/employees/${id}`);
  }

  create(data) {
    return http.post("/employees", data);
  }

  update(id, data) {
    return http.put(`/employees/${id}`, data);
  }

  delete(id) {
    return http.delete(`/employees/${id}`);
  }

  deleteAll() {
    return http.delete(`/employees`);
  }

  findByEmail(email) {
    return http.get(`/employees?email=${email}`);
  }
}

export default new UserDataService();