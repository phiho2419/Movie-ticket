import React from 'react';
import { Table, Space } from 'antd';
import { Button } from 'antd';
const { Column } = Table;
const data = [
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    }, {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },
    {
        maPhim: '1',
        tenPhim: 'John',
        hinhAnh: 'Brown',
        moTa: 32,
        maNhom: 'New York No. 1 Lake Park',
        ngayKhoiChieu: 'developer',
    },


];

export default function AdminQuanLyNguoiDung() {
    return (
        <div className="pageQuanLyPhim mt-4">
            <h1 className="admin_title mt-4 text-center">Quản lý người dùng</h1>

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

                <Table dataSource={data} bordered="true" >
                    <Column title="STT" dataIndex="maPhim" key="1" />
                    <Column title="Tài khoản" dataIndex="tenPhim" key="2" />
                    <Column title="Mật khẩu" dataIndex="hinhAnh" key="3" />
                    <Column title="Họ tên" dataIndex="moTa" key="4" />
                    <Column title="Email" dataIndex="maNhom" key="5" />
                    <Column title="Số điện thoại" dataIndex="ngayKhoiChieu" key="6" />
                    <Column
                        key="action"
                        render={() => (
                            <Space size="small">
                                <Button danger size="small">Ghi danh</Button>
                                <Button type="primary" size="small">Sửa</Button>
                                <Button type="primary" danger size="small">Xoá</Button>
                            </Space>
                        )}
                    />

                </Table>
            </div>
        </div>
    )
}
