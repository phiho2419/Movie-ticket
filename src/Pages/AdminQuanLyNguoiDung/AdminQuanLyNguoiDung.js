import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Popover, Button } from 'antd';
import { layDanhSachNguoiDungAction } from '../../Redux/Actions/AdminAction';
const { Column } = Table;
const popoverDelete = (
    <small>Delete</small>
);
const popoverEdit = (
    <small>Edit</small>
);

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

                <Table dataSource={mangNguoiDung} bordered="true" pagination={{ onChange(current) { setPage(current) } }} pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15'] }}>
                    <Column align={'center'} title="STT" key="STT" render={(value, item, index) => (page - 1) * 10 + index + 1} />
                    <Column title="Tài khoản" dataIndex="taiKhoan" key="taiKhoan" />
                    <Column title="Mật khẩu" dataIndex="matKhau" key="matKhau" />
                    <Column title="Họ tên" dataIndex="hoTen" key="hoTen" />
                    <Column title="Email" dataIndex="email" key="email" />
                    <Column title="Số điện thoại" dataIndex="soDt" key="soDt" />
                    <Column
                        key="action"
                        render={(value, item, index) => (
                            <Space size="small">
                                <Popover content={popoverEdit}>
                                    <Button type="primary" size="small" onClick={(value) => {
                                        
                                    }}><i class="fa fa-edit"></i></Button>
                                </Popover>
                                <Popover content={popoverDelete}>
                                    <Button type="primary" danger size="small" onClick={(value) => {
                                        
                                    }}><i class="fa fa-trash-alt"></i></Button>
                                </Popover>
                            </Space>
                        )}
                    />

                </Table>
            </div>
        </div>
    )
}
