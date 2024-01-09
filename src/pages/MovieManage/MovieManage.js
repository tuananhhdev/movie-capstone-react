import React, { useEffect, useState } from "react";
import { listAPI } from "../../services/API";
import { Button, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieThunk } from "../../redux/MovieSlice";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ExclamationCircleOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import "./AddMovie.css";

const MovieManage = () => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deletingMovieId, setDeletingMovieId] = useState(null);

  const [listMovie, setListMovie] = useState([]);
  const dispacth = useDispatch();
  const nav = useNavigate();
  const { arrMovie } = useSelector((state) => state.MovieSlice);
  const showDeleteModal = (movieId) => {
    setDeletingMovieId(movieId);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    listAPI
      .delete_movie(deletingMovieId)
      .then(() => {
        dispacth(getAllMovieThunk());
        setDeleteModalVisible(false);
        setDeletingMovieId(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // listAPI
    //   .get_movie()
    //   .then((res) => setListMovie(res.data.content))
    //   .catch((err) => console.log(err));
    // tao thunk
    dispacth(getAllMovieThunk());
  }, []);
  // console.log(listMovie);
  const columns = [
    {
      // tên cột
      title: "Mã phim",
      // data index giúp bắt được thuộc tính
      dataIndex: "maPhim",
      key: "maPhim",
      // render: (text, record, index) => {
      //   console.log(record);
      // },
      // render:(text)=>
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => <img src={text} alt="" className="w-28" />,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      render: (text) => <p className="w-96 line-clamp-1">{text}</p>,
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div className="space-x-3">
          <button
            className="px-2 py-4 rounded-md bg-red-300"
            onClick={() => showDeleteModal(record.maPhim)}

            // onClick={() =>
            //   listAPI
            //     .delete_movie(record.maPhim)
            //     .then(() =>
            //       listAPI.get_movie().then((res) => {
            //         setListMovie(res.data.content);
            //       })
            //     )
            //     .catch((err) => console.log(err))
            // }
          >
            Delete
          </button>
          <button className="px-2 py-4 rounded-md bg-yellow-300">Edit</button>
        </div>
      ),
    },
  ];

  // const data = listMovie;

  return (
    <>
      <h2 className="font-bold text-2xl text-center mb-5">Quản lý phim</h2>

      <Button
        className="py-2 px-5 leading-normal bg-blue-600 text-white mb-5"
        type="primary"
        onClick={() => {
          nav("/admin/add-movie");
        }}
      >
        Them phim
      </Button>

      <Table
        columns={columns}
        dataSource={arrMovie}
        pagination={{ pageSize: 3 }}
      />
      <Modal
        title="Xác nhận xoá phim"
        visible={isDeleteModalVisible}
        onOk={handleDeleteConfirm}
        cancelText="huỷ"
        onCancel={() => {
          setDeleteModalVisible(false);
          setDeletingMovieId(null);
        }}
      >
        <p>Bạn có chắc chắn muốn xoá phim này?</p>
      </Modal>
    </>
  );
};

export default MovieManage;
