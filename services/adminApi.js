import axios from "axios";

const API = axios.create({
  baseURL: "https://terrific-determination-production-cf17.up.railway.app/api/admin", // change to your actual backend URL
});

// Generic GET function
export const get = async (url, params = {}) => {
  const res = await API.get(url, { params });
  return res.data;
};
