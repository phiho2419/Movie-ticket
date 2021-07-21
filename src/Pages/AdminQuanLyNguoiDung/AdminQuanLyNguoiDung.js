import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Button, Input } from 'antd';
import { layDanhSachNguoiDungAction, timKiemNguoiDungAction, xoaNguoiDung } from '../../Redux/Actions/AdminAction';
import EditNguoiDung from './EditNguoiDung';
import { useFormik } from 'formik';

const { Column } = Table;


export default function AdminQuanLyNguoiDung() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, [dispatch]);

    document.title = "Admin | Quản Lý Người Dùng";

    const { mangNguoiDung } = useSelector(state => state.AdminReducer);
    const formik = useFormik({
        initialValues: {
            tuKhoa: ''
        },
        onSubmit: values => {
            if (!values.tuKhoa) {
                dispatch(layDanhSachNguoiDungAction());
            } else {
                dispatch(timKiemNguoiDungAction(values));
            }
        },
    });
    return (
        <div className="pageQuanLyPhim">
            <div className="admin__title text-center">
                <h1 className="font-weight-bold">Quản lý người dùng</h1>
            </div>
            <form className="search_form" onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <Input placeholder="Nhập vào tài khoản hoặc họ tên người dùng" name="tuKhoa" onChange={formik.handleChange} />
                    <div className="input-group-append">
                        <button type="submit" style={{ border: "none" }}>
                            <span className="input-group-text" id="basic-addon2" style={{ height: "100%" }}>
                                <i className="fa fa-search" />
                            </span>
                        </button>

                    </div>
                </div>
            </form>
            <div className="mt-4 px-2">
                <Table rowKey="taiKhoan" dataSource={mangNguoiDung} bordered="true" pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15'] }}>
                    <Column align={'center'} title="STT" key="STT" render={(value, item, index) => index + 1} />
                    <Column title="Tài khoản" dataIndex="taiKhoan" key="taiKhoan" />
                    <Column title="Mật khẩu" dataIndex="matKhau" key="matKhau" />
                    <Column title="Họ tên" dataIndex="hoTen" key="hoTen" />
                    <Column title="Email" dataIndex="email" key="email" />
                    <Column title="Số điện thoại" dataIndex="soDt" key="soDt" />
                    <Column
                        key="action"
                        render={(record) => (
                            <Space size="small">
                                <Button type="primary" size="small" onClick={() => {
                                    dispatch({
                                        type: 'SET_NGUOI_DUNG',
                                        thongTinNguoiDung: record
                                    })
                                }} data-toggle="modal" data-target="#EditNguoiDung"><i className="fa fa-edit"></i></Button>
                                <div className="modal fade" id="EditNguoiDung" tabIndex="-1" aria-labelledby="EditNguoiDung" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <EditNguoiDung />
                                        </div>
                                    </div>
                                </div>
                                <Button type="primary" danger size="small" onClick={() => {
                                    dispatch(xoaNguoiDung(record.taiKhoan))
                                }}><i className="fa fa-trash-alt"></i></Button>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}
