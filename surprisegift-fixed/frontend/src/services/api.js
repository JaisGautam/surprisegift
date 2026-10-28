import axios from "axios";

const API = axios.create({
  // Set VITE_API_URL only when the API is hosted on a different origin.
  // Same-origin /api works for Vercel deployments and the Vite dev proxy below.
  baseURL: (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, ""),
  timeout: 15000,
});

API.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export default API;
