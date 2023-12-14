import axios from "axios";

const API = axios.create({
  // baseURL: "https://college-veda-backend.onrender.com/api",
  baseURL: "https://college-veda-backend-mg.vercel.app/api",
});

export const getColleges = () => API.get("/colleges");
export const getCollegeById = (collegeId) => API.get(`/colleges/${collegeId}`);
export const getCollegesWithFilters = (data) =>
  API.post("/colleges/filters", data);
