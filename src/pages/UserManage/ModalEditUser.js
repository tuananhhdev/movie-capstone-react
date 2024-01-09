import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";
import { listAPI } from "../../services/API";

const ModalEditUser = ({ visible, onCancel, userId, onUpdate }) => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Gọi API để lấy thông tin user theo userId
    listAPI
      .getUserById(userId)
      .then((response) => {
        setUserData(response.data);
        form.setFieldsValue(response.data);
      })
      .catch((error) => console.error("Error fetching user data", error));
  }, [userId, form]);

  const handleUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        // Gọi API để cập nhật thông tin user
        listAPI
          .updateUser(userId, values)
          .then(() => {
            onUpdate();
            onCancel();
          })
          .catch((error) => console.error("Error updating user", error));
      })
      .catch((error) => console.error("Validation failed", error));
  };

  return (
    <Modal
      title="Chỉnh sửa thông tin User"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleUpdate}>
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="editUserForm">
        <Form.Item
          name="taiKhoan"
          label="Tài khoản"
          rules={[{ required: true }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item name="hoTen" label="Họ tên" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="soDT"
          label="Số điện thoại"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="maLoaiNguoiDung"
          label="Loại người dùng"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
