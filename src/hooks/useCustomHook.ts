import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const apiUrl = "http://localhost:3000";

// dung useQuery fetching data
export const useFetchData = (endpoint: string) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const { data } = await axios.get(`${apiUrl}/${endpoint}`);
      return data;
    },
  });
};

// fetchApiById
export const useFetchDataById = (endpoint: string, id: string | number) => {
    return useQuery({
      queryKey: [id],
      queryFn: async () => {
        const res = await axios.get(`${apiUrl}/${endpoint}/${id}`);
        return res.data
      }
    })
};

// create
export const useCreateData = (endpoint: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`${apiUrl}/${endpoint}`, data);
      return res.data; 
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [endpoint]});
    },
    onError: (error) => {
      console.error("Error", error);
    },
  });
};

// update
export const useUpdateData = (endpoint: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({id,data}: {id: string | number, data: any}) => {
      const res = await axios.put(`${apiUrl}/${endpoint}/${id}`, data);
      return res.data; 
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [endpoint]});
    },
    onError: (error) => {
      console.error("Error", error);
    },
  });
};

// remove
export const useRemoveData = (endpoint: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`${apiUrl}/${endpoint}/${id}`);
      return res.data; 
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [endpoint]});
    },
    onError: (error) => {
      console.error("Error", error);
    },
  });
};
