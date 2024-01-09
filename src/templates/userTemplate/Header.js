import { LogoutOutlined, PlaySquareOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  // console.log(user);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const renderUser = () => {
    if (user) {
      return (
        <>
          <p className="lg:pt-2">{user.hoTen}</p>
          <button
            onClick={() => {
              localStorage.removeItem("user_info");
              message.success("Đăng xuất thành công!");
              setTimeout(() => {
                nav("/login");
              }, 1000);
            }}
            className="bg-transparent mb:mt-5 lg:inline py-2  lg:ml-4 bg-green-400 lg:px-5 text-left rounded-md"
          >
            <span className="">Đăng Xuất</span>
            <LogoutOutlined className="ml-2 text-xl" />{" "}
          </button>
        </>
      );
    } else {
      return (
        <NavLink
          to={"/login"}
          className="text-sm font-bold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">→</span>
        </NavLink>
      );
    }
  };
  return (
    <>
      <header className="bg-white text-black font-bold">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={`/`} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <PlaySquareOutlined
                className="custom-icon"
                style={{ fontSize: "24px", color: "blue" }}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              className={({ isActive, isPending }) => {
                return isActive ? "text-red-500" : "";
              }}
              to={"/"}
            >
              Trang chủ
            </NavLink>
            <NavLink to={"/cum-rap"}>Cụm rạp</NavLink>
            <NavLink to={"/"}>Tin tức</NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                // console.log(isActive);
                return isActive ? "text-red-500" : "";
              }}
              to={"/ung-dung"}
            >
              Ứng dụng
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            {/* {user ? (
              <p>{user.hoTen}</p>
            ) : (
              <NavLink
                to={"/login"}
                className="text-sm font-bold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">→</span>
              </NavLink>
            )} */}
            {renderUser()}
          </div>
        </nav>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden fixed inset-0 z-10`}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="flex flex-col space-y-5">
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isActive ? "text-red-500" : "";
                  }}
                  to={"/"}
                >
                  Trang chủ
                </NavLink>
                <NavLink to={"/cum-rap"}>Cụm rạp</NavLink>
                <NavLink to={"/"}>Tin tức</NavLink>
                <NavLink
                  className={({ isActive, isPending }) => {
                    // console.log(isActive);
                    return isActive ? "text-red-500" : "";
                  }}
                  to={"/ung-dung"}
                >
                  Ứng dụng
                </NavLink>
              </div>
              <div className="mt-5 flex flex-col">
                {/* nếu người dùng dang nhap rôi hiển thị tên */}
                {renderUser()}
                {/* {user ? (
                  <p>{user.hoTen}</p>
                ) : (
                  <NavLink
                    to={"/login"}
                    className="text-sm font-bold leading-6 text-gray-900"
                  >
                    Log in <span aria-hidden="true">→</span>
                  </NavLink>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
