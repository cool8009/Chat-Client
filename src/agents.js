import axios from 'axios';

//sets a default url for the agent
axios.defaults.baseURL = "http://localhost:5000/api";
//gets the response data to a variable called response body
const responseBody = function (response) {
  return response.data;
};
const requests = {
  get: function (url) {
    return axios.get(url).then(responseBody);
  },
  post: function (url, body) {
    return axios.post(url, body).then(responseBody);
  },
  put: function (url, body) {
    return axios.put(url, body).then(responseBody);
  },
  del: function (url) {
    return axios.delete(url).then(responseBody);
  },
};
//makes a request to the api server
const Messages = {
  list: function () {
    return requests.get("/messages");
  },
  create: function (message) {
    return requests.post("/messages", message);
  },
};
const agent = {
  Messages,
};
export default agent;
