import axios from "axios";

//set baseURL to use for HTTP requests
const API = axios.create({ baseURL: "http://localhost:5000" });

//use interceptors by getting profile info from the local storage
//make use of Headers authorization
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

//export all my methods
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const adminSignUp = (formData) => API.post("/user/admin/signup", formData);

export const getAllUsers = () => API.get("/user/users");
export const suspendUser = (userId) =>
  API.patch(`/user/users/${userId}/suspend`);
export const unsuspendUser = (userId) =>
  API.patch(`/user/users/${userId}/unsuspend`);
