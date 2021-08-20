import axios from "axios";

const baseURL = "http://localhost:2410";

function get(url) {
  return axios.get(baseURL + url);
}

function post(url, obj) {
  console.log(baseURL + url, obj);
  return axios.post(baseURL + url, obj);
}

const exportData = {
  get,
  post,
};

export default exportData;
