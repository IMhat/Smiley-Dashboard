import axios from "axios";

export default axios.create({
  baseURL: (process.env.REACT_APP_SERVER_URL || "https://smiley-appi.herokuapp.com")+"/api",
  headers: {
    "Content-type": "application/json"
  }
});