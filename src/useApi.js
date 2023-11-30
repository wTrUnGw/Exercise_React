import axios from "axios";
import React, { useRef } from "react";

export default function useApi() {
  const baseApi = useRef("https://650f9b1554d18aabfe9a2044.mockapi.io/api/users");
  const addUser = async (user) => {
    const response = await axios.post(baseApi.current, user);
    return response.data;
  };
  const fetchUsers = async () => {
    const response = await axios.get(baseApi.current);
    return response.data;
  };
  const fetchUserById = async (id) => {
    const response = await axios.get(`${baseApi.current}/${id}`);
    return response.data;
  };
  const updateUser = async (id, user) => {
    const response = await axios.put(`${baseApi.current}/${id}`, user);
    return response.data;
  };
  const deleteUser = async (id) => {
    const response = await axios.delete(`${baseApi.current}/${id}`);
    return response.data;
  };

  return { fetchUsers, fetchUserById, deleteUser, addUser, updateUser };
}
