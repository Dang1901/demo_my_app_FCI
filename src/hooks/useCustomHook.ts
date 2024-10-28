import axios, { AxiosError } from "axios";
import { apiUrl } from "../api/api";
import { IPost } from "../shared/interface/post";
import { useQuery } from "@tanstack/react-query";

const apiUrl = "http://localhost:3000/posts"

export const useFetchApi = () => {
  return useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axios.get(apiUrl);
      return res.data;
    },
  });
};
export const useFetchApibyId = (id) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axios.get(`${apiUrl}/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};

// add
export const addPost = async (data) => {
  try {
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (error) {
    console.error("xxxxxx", error);
    throw error;
  }
};

// edit
export const updatePost = async ({ id, ...data }) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("xxxxxx", error);
    throw error;
  }
};
export const removePost = async (id: number) => {
  // console.log("xxxxx", id);
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response;
  } catch (error) {
    console.error("xxxxx", error);
    throw error;
  }
};
