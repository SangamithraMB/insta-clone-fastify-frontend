import axios from "axios";

// Use environment variable or fallback to localhost for dev
const baseURL = import.meta.env.VITE_BACKEND_DEPLOYED || "http://localhost:3000";
console.log('asdf');

// We define the base URL of our backend API.
const api = axios.create({
  baseURL
});

export { api };