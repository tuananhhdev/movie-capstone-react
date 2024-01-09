import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { disableLoading, enableLoading } from "../../redux/LoadingSlice";
import Loading from "../../components/Loading/Loading";

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispacth = useDispatch();
  const nav = useNavigate();
  // dispacth(enableLoading());
  const location = useLocation();
  const { isActive } = useSelector((state) => state.LoadingSlice);

  console.log(location);
  const { user } = useSelector((state) => state.userSlice);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // kieerm tra quyen nguoi dung
  useEffect(() => {
    dispacth(enableLoading());
    if (user) {
      if (user.maLoaiNguoiDung != "QuanTri") {
        window.location.href = "https://www.google.com/";
      }
      dispacth(disableLoading());
    } else {
      // chưa đăng nhập nên không có dữ liệu trên redux
      nav("/login");
    }
  }, [location.pathname]);
  return (
    <>
      {/* {isActive ? <Loading /> : null} */}

      <Layout className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={[
              {
                key: "/admin/user_manage",
                icon: <UserOutlined />,
                label: (
                  <Link to={"/admin/user_manage"}>Quản lý người dùng</Link>
                ),
              },
              {
                key: "/admin",
                icon: <VideoCameraOutlined />,
                label: <Link to={"/admin"}>Quản lý phim</Link>,
              },
              // {
              //   key: "/admin/create_movie",
              //   icon: <VideoCameraOutlined />,
              //   label: <Link to={"/admin/create_movie"}>Tạo phim</Link>,
              // },
              {
                key: "/admin/order_manage",
                icon: <UploadOutlined />,
                label: <Link to={"/admin/order_manage"}>Quản lý đặt vé</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminTemplate;

// import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, Button, theme } from "antd";
// import { Link, Outlet, useLocation } from "react-router-dom";
// const { Header, Sider, Content } = Layout;
// const AdminTemplate = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();
//   console.log(location);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout className="min-h-screen">
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />

//         <Menu
//           theme="dark"
//           mode="inline"
//           // lấy localtion từ hook useLocation để kiểm tra xem người dùng đang đứng ở component nào để active nút menu
//           defaultSelectedKeys={[location.pathname]}
//           items={[
//             {
//               key: "/admin/manager-user",
//               icon: <UserOutlined />,
//               label: <Link to={"/admin/manager-user"}>Quản lí người dùng</Link>,
//             },
//             {
//               key: "/admin",
//               icon: <VideoCameraOutlined />,
//               label: <Link to={"/admin"}>Quản lí phim</Link>,
//             },
//             {
//               key: "/admin/add-movie",
//               icon: <VideoCameraOutlined />,
//               label: <Link to={"/admin/add-movie"}>Tạo phim</Link>,
//             },
//             {
//               key: "/admin/manager-order",
//               icon: <UploadOutlined />,
//               label: <Link to={"/admin/order-movie"}>Quản lí lịch đặt vé</Link>,
//             },
//           ]}
//         />
//       </Sider>

//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}>
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: "16px",
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}>
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default AdminTemplate;
