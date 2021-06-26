import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Image, Tag } from 'antd';
import { Button, Modal } from 'antd';
import { callAPI_layDanhSachPhimAction, LayThongTinPhimAction } from '../../Redux/Actions/QuanLyPhimAction';
import Edit from './Edit';
import { xoaPhim } from '../../Redux/Actions/AdminAction';
import { USERLOGIN } from '../../Util/setting';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';

const { Column } = Table;

export default function AdminQuanLyPhim() {
    const dispatch = useDispatch();
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    useEffect(() => {
        dispatch(callAPI_layDanhSachPhimAction());

    }, [])
    // console.log(mangPhim);
    let dataUser = JSON.parse(localStorage.getItem(USERLOGIN));
    console.log(dataUser);
    if (!localStorage.getItem(USERLOGIN)) {
        // Swal.fire({
        //     icon: 'error',
        //     text: 'Bạn vui lòng đăng nhập !',
        // })
        return <Redirect to="/dangnhap" />
    } else if (dataUser.maLoaiNguoiDung !== "QuanTri") {
        Swal.fire({
            icon: 'error',
            text: 'Không có quyền quản trị !',
        })
        return <Redirect to="/" />
        // console.log(dataUser.maLoaiNguoiDung);
    }
    return (
        <div className="pageQuanLyPhim mt-4">
            <h1 className="admin_title mt-4 text-center">Quản lý phim</h1>
            <form className="search_form">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập vào tài khoản hoặc họ tên người dùng" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fa fa-search" />
                        </span>
                    </div>
                </div>
            </form>
            <div className="container mt-4">
                <Table dataSource={mangPhim} bordered="true" pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15'] }}>
                    <Column align="center" title="Mã phim" dataIndex="maPhim" key="maPhim" />
                    <Column align="center" title="Tên phim" dataIndex="tenPhim" key="tenPhim" />
                    <Column title="Hình ảnh"
                        key="hinhAnh"
                        render={(text, record) => (
                            <Space size="small">
                                <Image src={record.hinhAnh} alt="hinhAnh" preview={false} />
                            </Space>
                        )}
                    />
                    <Column title="Mô tả" dataIndex="moTa" key="moTa" />
                    <Column title="Ngày khởi chiếu" key="ngayKhoiChieu" render={(text, record) => (
                        <Space size="small">
                            <Tag color="gold">{record.ngayKhoiChieu.substr(0, 10)}</Tag>
                        </Space>
                    )} />

                    <Column

                        key="action"
                        render={(text, record) => (
                            <Space size="small">
                                <Button type="primary" size="small" onClick={() => {
                                    dispatch({
                                        type: 'SET_MA_PHIM',
                                        thongTinPhim: record
                                    })

                                }} data-toggle="modal" data-target="#EditPhim"><i class="fa fa-edit" ></i></Button>
                                <div class="modal fade" id="EditPhim" tabindex="-1" aria-labelledby="EditPhimLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <Edit />
                                        </div>
                                    </div>
                                </div>
                                <Button type="primary" danger size="small"><i class="fa fa-trash-alt" onClick={() => {
                                    dispatch(xoaPhim(record.maPhim))
                                }}></i></Button>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </div>


    )
}