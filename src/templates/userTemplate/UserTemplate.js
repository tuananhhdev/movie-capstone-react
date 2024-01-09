import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Footer from "./Footer";
import Header from "./Header";
import AppDownload from "../../pages/HomePage/AppDownload";

const UserTemplate = () => {
  const { isActive } = useSelector((state) => state.LoadingSlice);
  // const dispatch = useDispatch();
  // dispatch(enableLoading());
  // console.log(isActive);
  return (
    <>
      {isActive ? <Loading /> : null}
      <>
        <Header />
        <Outlet />
        {/* <AppDownload /> */}
        <Footer />
      </>
    </>
  );
};

export default UserTemplate;
