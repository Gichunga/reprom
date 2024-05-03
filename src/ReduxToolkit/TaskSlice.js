import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../Api/api";

// for admin role
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get("/api/projects", {
        params: { status },
      });
      console.log("fetch projects: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

// for user role
export const fetchUserProjects = createAsyncThunk(
  "projects/fetchUserProjects",
  async ({ status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get("/api/projects/user", {
        params: { status },
      });
      console.log("fetch user projects: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

//fetch projects by id
export const fetchProjectsById = createAsyncThunk(
  "projects/fetchProjectsById",
  async (projectId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);

    try {
      const { data } = await api.get(`/api/projects/${projectId}`);
      console.log("fetch project by id: ", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const createProject = createAsyncThunk(
    "projects/createProject",
    async (projectData) => {
      setAuthHeader(localStorage.getItem("jwt"), api);
  
      try {
        const { data } = await api.get(`/api/projects/`,ta);
        console.log("fetch project by id: ", data);
        return data;
      } catch (error) {
        console.log("error", error);
      }
    }
  );