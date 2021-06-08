import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Image } from 'antd';
import { Button } from 'antd';
import { layDanhSachNguoiDungAction } from '../../Redux/Actions/AdminAction';
const { Column } = Table;


export default function AdminQuanLyNguoiDung() {
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());

    }, []);

    const { mangNguoiDung } = useSelector(state => state.AdminReducer);
    console.log('mangNguoiDung :', mangNguoiDung);
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

                <Table dataSource={mangNguoiDung} bordered="true" pagination={{ onChange(current){setPage(current)}}}>
                    <Column title="STT" key="1" render={(value, item, index) => (page - 1) * 10 + index + 1} />
                    <Column title="Tài khoản" dataIndex="taiKhoan" key="2" />
                    <Column title="Mật khẩu" dataIndex="matKhau" key="3" />
                    <Column title="Họ tên" dataIndex="hoTen" key="4" />
                    <Column title="Email" dataIndex="email" key="5" />
                    <Column title="Số điện thoại" dataIndex="soDt" key="6" />
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
