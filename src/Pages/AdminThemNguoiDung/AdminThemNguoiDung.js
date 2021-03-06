import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Select } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { themNguoiDungAction } from '../../Redux/Actions/AdminAction';

const { Option } = Select;
export default function AdminThemNguoiDung() {
    const dispatch = useDispatch();
    document.title = "Admin | Thêm Người Dùng";

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP01',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Email không đúng định dạng'),
            soDt: Yup.number().typeError("That doesn't look like a phone number"),
        }),
        onSubmit: (values) => {
            dispatch(themNguoiDungAction(values));
        }
    })

    const onChangeLoaiNguoiDung = (valueText) => {
        formik.setFieldValue('maLoaiNguoiDung', valueText)
    }
    return (
        <div>
            <div style={{ marginTop: '40px' }}>
                <div className="admin__title text-center">
                    <h1 className="font-weight-bold">Thêm người dùng</h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row ">

                        <div className="col-6">
                            <label className="font-weight-bold">Tài khoản</label>
                            <Input placeholder="Nhập tài khoản" name="taiKhoan" onChange={formik.handleChange} required />
                            <p className="text-danger">{formik.errors.taiKhoan}</p>

                            <label className="font-weight-bold">Mật khẩu</label>
                            <Input placeholder="Nhập mật khẩu" name="matKhau" onChange={formik.handleChange} required />
                            <p className="text-danger">{formik.errors.matKhau}</p>

                            <label className="font-weight-bold">Họ tên</label>
                            <Input placeholder="Nhập họ tên" name="hoTen" onChange={formik.handleChange} required />
                            <p className="text-danger">{formik.errors.hoTen}</p>

                        </div>
                        <div className="col-6">
                            <label className="font-weight-bold ">Email</label>
                            <Input placeholder="Nhập email" name="email" onChange={formik.handleChange} required />
                            <p className="text-danger">{formik.errors.email}</p>

                            <label className="font-weight-bold ">Số điện thoại</label>
                            <Input placeholder="Nhập số điện thoại" name="soDt" onChange={formik.handleChange} required />
                            <p className="text-danger">{formik.errors.soDt}</p>

                            <label className="font-weight-bold ">Loại tài khoản</label>
                            <Select defaultValue="KhachHang" className="d-block" placeholder="- Chọn loại tài khoản -" name="loaiNguoiDung" onChange={onChangeLoaiNguoiDung}>
                                <Option value="KhachHang">Khách hàng</Option>
                                <Option value="QuanTri">Quản trị</Option>
                            </Select>

                        </div>
                        <div className="col-6">

                            <label className="font-weight-bold ">Mã nhóm</label>
                            <select className="form-control" name="maNhom" onChange={formik.handleChange} >
                                <option value="GP01" >GP01</option>
                                <option value="GP02" >GP02</option>
                                <option value="GP03" >GP03</option>
                                <option value="GP04" >GP04</option>
                                <option value="GP05" >GP05</option>
                                <option value="GP06" >GP06</option>
                                <option value="GP07" >GP07</option>
                                <option value="GP08" >GP08</option>
                                <option value="GP09" >GP09</option>
                                <option value="GP10" >GP10</option>
                            </select>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="text-right">
                                <Button type="primary" htmlType="submit">Thêm người dùng</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
