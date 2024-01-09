import { DatePicker, Rate, Switch, message } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { number } from "yup";
import "./AddMovie.css";
import moment from "moment";
import { listAPI } from "../../services/API";
import { useNavigate } from "react-router-dom";
const AddMovie = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    // setValues,
    errors,
    touched,
    values,
    resetForm,
    // lấy giá trị nguyên 1 object
    setValues,
    // bọc bằng formik thì k cần setFieldValue
    setFieldValue,
  } = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      // maNhom: "",
      ngayKhoiChieu: "",
      SapChieu: "",
      DangChieu: "",
      Hot: "",
      danhGia: 1,
      hinhAnh: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // convert dữ liệu ngày giờ

      const formData = new FormData();
      for (let key in values) {
        console.log(key);
        if (key == "hinhAnh") {
          formData.append("File", values[key]);
        } else if (key == "ngayKhoiChieu") {
          formData.append(key, moment(values[key]).format("DD-MM-YYYY"));
        } else {
          formData.append(key, values[key]);
        }
      }
      formData.append("maNhom", "GP08");

      listAPI
        .addMovie(formData)
        .then((res) => {
          console.log(res);
          resetForm();
          navigate("/admin");
        })
        .catch((err) => {
          console.log(err.response.data.content);
          message.error(err.response.data.content);
          setImage("");
        });
    },
  });

  const [image, setImage] = useState("");
  console.log(values);
  return (
    <div>
      <h2 className="font-bold mt-5 text-2xl text-center">Tạo mới phim</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="tenPhim"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tên phim
          </label>
          <input
            type="text"
            id="tenPhim"
            name="tenPhim"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tenPhim}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="trailer"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Trailer
          </label>
          <input
            type="text"
            id="trailer"
            name="trailer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.trailer}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="moTa"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mô tả
          </label>
          <input
            type="text"
            id="moTa"
            name="moTa"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.moTa}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="ngayKhoiChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Ngày khởi chiếu
          </label>
          <DatePicker
            format={"DD-MM-YYYY"}
            // id="ngayKhoiChieu"
            onChange={(date, dateString) => {
              //   console.log(date);
              //   console.log(dateString);
              //   key=ngayKhoiChieu
              //   value =dateString
              setFieldValue("ngayKhoiChieu", date);
            }}
            // onChange={handleChange}
            changeOnBlur={handleBlur}
            value={values.ngayKhoiChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="dangChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Đang chiếu
          </label>
          <Switch
            //   name="dangChieu"
            onChange={(checked, event) => {
              setFieldValue("DangChieu", checked);
            }}
            // onBlur={handleBlur}
            value={values.DangChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="sapChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Sắp chiếu
          </label>
          <Switch
            // id="sapChieu"
            // name="sapChieu"
            onChange={(checked, event) => {
              setFieldValue("SapChieu", checked);
            }}
            // blu={handleBlur}
            value={values.SapChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="hot"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hot
          </label>
          <Switch
            value={values.Hot}
            onChange={(checked, event) => {
              setFieldValue("Hot", checked);
            }}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="hot"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hot
          </label>
          <Rate
            value={values.danhGia}
            onChange={(value) => {
              console.log(value);
              setFieldValue("danhGia", value);
            }}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <label
            htmlFor="hot"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hình ảnh
          </label>
          <img src={image} alt="" className="h-52 z-20" />
          <input
            type="file"
            name="hinhAnh"
            onBlur={handleBlur}
            // Chỉ cho phép người dùng truyền lên dữ liệu là hình ảnh
            accept="image/*"
            onChange={(event) => {
              // lấy dữ liệu về file được gửi lên
              // console.log(event.target.files[0]);
              const img = event.target.files[0];
              // tạo đường dẫn cho tấm hình và lưu trữ vào state
              if (img) {
                const urlImg = URL.createObjectURL(img);
                console.log(urlImg);
                setImage(urlImg);
              }
              setFieldValue("hinhAnh", img);
            }}
          />

          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
          ) : null} */}
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-black py-2 px-5 rounded-md"
          >
            Thêm phim
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
