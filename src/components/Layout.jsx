import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import useApi from "../useApi";
import In4SV from "./In4SV";
import FormSV from "./FormSV";
import TableSinhVien from "./TableSinhVien";

export default function Layout() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchUsers, deleteUser, addUser, fetchUserById, updateUser } = useApi();

  const usersFull = useRef();
  const getUsers = async () => {
    const response = await fetchUsers();
    usersFull.current = response;
    await setUsers(response);
  };
  const handleAddUser = async (user) => {
    await addUser(user);
    getUsers();
    toast.success("Thêm Sinh Viên thành công");
  };
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    getUsers();
    toast.success("Xóa thành công");
  };
  const handleUpdateUser = async (id, user) => {
    await updateUser(id, user);
    getUsers();
    toast.success("Cập nhật thành công");
  };

  const getInfoSVById = async (id) => {
    const selected = await fetchUserById(id);
    setSelectedUser(selected);
    setIsUpdating(true);
  };

  const cancelUpdate = () => {
    setSelectedUser(null);
    setIsUpdating(false);
  };

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    if (searchTerm) {
      const usersFilter = usersFull.current.filter((user) =>
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(usersFilter);
      return;
    } else if (usersFull.current) {
      setUsers(usersFull.current);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <In4SV />
      <FormSV
        onAddUser={handleAddUser}
        selectedUser={selectedUser}
        isUpdating={isUpdating}
        cancelUpdate={cancelUpdate}
        handleUpdateUser={handleUpdateUser}
      />
      <TableSinhVien
        users={users}
        onDelete={handleDeleteUser}
        onGetUser={getInfoSVById}
        onChangeSearchTerm={handleChangeSearchTerm}
        cancelUpdate={cancelUpdate}
      />
      <Toaster position="top-right" />
    </div>
  );
}
