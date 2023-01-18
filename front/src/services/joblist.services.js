import axios from "axios";

const API_URL = "http://dev3.dansmultipro.co.id/api/";

const findAll = () => {
  return axios.get(API_URL + `recruitment/positions.json`)
};
const findByid = id => {
  return axios.get(API_URL + `recruitment/positions/`+id)
};

const jobsServices = {
  findAll,
  findByid
};

export default jobsServices;
