import { Table, message } from "antd";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { useNavigate } from "react-router-dom";
import ModalEditUser from "./ModalEditUser";

const UserManage = () => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);

  const [listUser, setListUser] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    listAPI
      .getUser()
      .then((r) => setListUser(r.data.content))
      .catch((e) => console.log(e));
  }, []);

  const showDeleteModal = (taiKhoan) => {
    setDeleteModalVisible(true);
    console.log(isDeleteModalVisible);
    console.log(taiKhoan);
    setDeletingUserId(taiKhoan);
  };
  const showEditModal = (userId) => {
    setEditModalVisible(true);
    setEditingUserId(userId);
  };
   const handleEditUser = () => {
     // Chức năng chỉnh sửa user
     // ...
     // Sau khi cập nhật thành công, đóng modal chỉnh sửa
     setEditModalVisible(false);
     setEditingUserId(null);
   };
  const handleDeleteConfirmUser = () => {
    console.log("Confirm delete");
    listAPI
      .deleteUser(deletingUserId)
      .then(() => {
        // Sau khi xoá thành công, cập nhật danh sách người dùng
        listAPI
          .getUser()
          .then((r) => setListUser(r.data.content))
          .catch((e) => console.log(e));

        setDeleteModalVisible(false);
        setDeletingUserId(null);
      })
      .catch((err) => console.log(err));
  };

  // console.log(listUser);
  const columns = [
    {
      // tên cột
      title: "Tài khoản",
      // data index giúp bắt được thuộc tính
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      //  render: (text) => <img src={text} alt="" className="w-28" />,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      //  render: (text) => <p>{text}</p>,
    },
    {
      title: "SDT",
      dataIndex: "soDT",
      key: "soDT",
      //  render: (text) => <p className="w-96 line-clamp-1">{text}</p>,
    },
    {
      title: "Người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      // render: (text) => <p className="w-96 line-clamp-1">{text}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div className="space-x-3">
          <button
            className="px-2 py-4 rounded-md bg-red-300"
            // onClick={() => showDeleteModal(record.taiKhoan)}

            onClick={() =>
              listAPI
                .deleteUser(record.taiKhoan)
                .then(() => {
                  listAPI.getUser().then((res) => {
                    setListUser(res.data.content);
                  });
                  message.success("Xoá thanh cong");
                })
                .catch((err) => message.error(err.response.data.content))
            }
          >
            Delete
          </button>
          <button
            onClick={() => showEditModal(record.taiKhoan)}
            className="px-2 py-4 rounded-md bg-yellow-300"
          >
            Edit
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-5">Quản lý User</h2>
      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{ pageSize: 10 }}
      >
        <Modal
          title="Xác nhận xoá User"
          onOk={handleDeleteConfirmUser}
          cancelText="Huỷ"
          visible={isDeleteModalVisible}
          onCancel={() => {
            setDeleteModalVisible(false);
            setDeletingUserId(null);
          }}
        >
          <p>Bạn có chắc chắn muốn xoá người dùng này</p>
        </Modal>
        <ModalEditUser
          visible={isEditModalVisible}
          onCancel={() => {
            setEditModalVisible(false);
            setEditingUserId(null);
          }}
          userId={editingUserId}
          onUpdate={handleEditUser}
        />
      </Table>
    </>
  );
};

export default UserManage;
