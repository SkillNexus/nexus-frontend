import axios from "axios";
import { store } from "../store/store";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      store.dispatch({ type: "auth/logout" });
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

// API methods
export const userAPI = {
  getProfile: () => api.get("/users/profile"),
  updateProfile: (data) => api.put("/users/profile", data),
  getSkills: () => api.get("/users/skills"),
  updateSkills: (skills) => api.put("/users/skills", { skills }),
  getGoals: () => api.get("/users/goals"),
  createGoal: (goal) => api.post("/users/goals", goal),
  updateGoal: (id, goal) => api.put(`/users/goals/${id}`, goal),
  deleteGoal: (id) => api.delete(`/users/goals/${id}`),
};

export const partnerAPI = {
  getSuggestions: () => api.get("/partners/suggestions"),
  sendRequest: (userId) => api.post("/partners/requests", { userId }),
  getRequests: () => api.get("/partners/requests"),
  acceptRequest: (requestId) =>
    api.put(`/partners/requests/${requestId}/accept`),
  rejectRequest: (requestId) =>
    api.put(`/partners/requests/${requestId}/reject`),
  getPartners: () => api.get("/partners"),
  endPartnership: (partnerId) => api.delete(`/partners/${partnerId}`),
};

export const messageAPI = {
  getConversations: () => api.get("/messages/conversations"),
  getMessages: (partnerId) => api.get(`/messages/conversations/${partnerId}`),
  sendMessage: (partnerId, content) =>
    api.post("/messages", { partnerId, content }),
  markAsRead: (messageId) => api.put(`/messages/${messageId}/read`),
};

export default api;
