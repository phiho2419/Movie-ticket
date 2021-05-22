import React from 'react'
import { Input, Button, Select  } from 'antd';
const { Option } = Select;
export default function AdminThemNguoiDung() {
    return (
        <div>
            <div className="container">

                <div className="row mt-5">
                    <div className="col-10">
                        <h1 className="admin_title">Thêm người dùng</h1>
                    </div>
                    <div className="col-5">
                        <label className="font-weight-bold mt-2">Tài khoản</label>
                        <Input placeholder="Nhập tài khoản" className="mb-3" />
                        <label className="font-weight-bold mt-2">Mật khẩu</label>
                        <Input placeholder="Nhập mật khẩu" className="mb-3" />
                        <label className="font-weight-bold mt-2">Họ tên</label>
                        <Input placeholder="Nhập họ tên" className="mb-3" />
                    </div>
                    <div className="col-5">
                        <label className="font-weight-bold mt-2">Email</label>
                        <Input placeholder="Nhập email" className="mb-3" />
                        <label className="font-weight-bold mt-2">Số điện thoại</label>
                        <Input placeholder="Nhập số điện thoại" className="mb-3" />
                        <label className="font-weight-bold mt-2">Loại tài khoản</label>
                        <Select className="d-block" placeholder="Chọn loại tài khoản">
                            <Option value="khachHang">Khách hàng</Option>
                            <Option value="quanTri">Quản trị</Option>
                        </Select>
                    </div>
                    <div className="col-10 mt-3">
                        <div className="text-right">
                            <Button type="primary">Thêm người dùng</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
