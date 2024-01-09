import { Route, Routes } from "react-router-dom";
import BookTicket from "./pages/BookTicket/BookTicket";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import AddMovie from "./pages/MovieManage/AddMovie";
import MovieManage from "./pages/MovieManage/MovieManage";
import OrderManage from "./pages/OrderMange/OrderManage";
import Page404 from "./pages/Page404";
import UserManage from "./pages/UserManage/UserManage";
import Login from "./pages/login/Login";
import AdminTemplate from "./templates/adminTemplate/AdminTemplate";
import UserTemplate from "./templates/userTemplate/UserTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          {/* index giúp hiển thị vị trí ngang cấp cha */}
          <Route index element={<HomePage />} />
          <Route element={<MovieDetails />} path="/movie-details/:maPhim" />
          <Route element={<BookTicket />} path="/book-ticket/:MaLichChieu" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<AdminTemplate />} path="/admin">
          <Route index element={<MovieManage />} />
          <Route element={<UserManage />} path="user_manage" />
          <Route element={<AddMovie />} path="add-movie" />
          <Route element={<OrderManage />} path="order-movie" />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

// trang admin quản lý người dùng
//
// chi tiết phim
// đặt vé
