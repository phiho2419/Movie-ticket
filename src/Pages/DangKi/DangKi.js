import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../Redux/Actions/NguoiDungAction';
import { NavLink } from 'react-router-dom';

export default function DangKi() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'Gp01',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: '',
            matKhauConfirm: '',

        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Không được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, ' tối đa 32 kí tự!'),
            email: Yup.string().required('Email không được bỏ trống').email('Phải đúng dịnh dạng @email'),
            soDt: Yup.number().required('Số điện thoại không được bỏ trống').positive('Số điện thoại phải là dạng số'),
            matKhauConfirm: Yup.string().required('Không được bỏ trống').min(6, 'mật khẩu tối thiểu 6 ký tự').max(32, ' tối đa 32 kí tự!').oneOf([Yup.ref("matKhau"), null], " nhập lại không đúng"),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),

        }),
        onSubmit: values => {
            dispatch(dangKyAction(values));
        },
    });
    return (
        <div className="DangKy">
            <div className="DK__content">
                <h2 className="font-weight-bold">ĐĂNG KÝ</h2>
                <form onSubmit={formik.handleSubmit} className="container-fluid">
                    <div class="row">
                        <div className="col-12" style={{ padding: 0 }}>
                            <div className="form__user">
                                <input required name="taiKhoan" onChange={formik.handleChange} />
                                <label>Tài khoản</label>
                                <span className="text-danger"> {formik.errors.taiKhoan}</span>

                            </div>

                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user">
                                <input required type="password" name="matKhau" onChange={formik.handleChange} />
                                <label>Mật khẩu</label>
                                <span className="text-danger"> {formik.errors.matKhau}</span>
                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user">
                                <input required type="password" name="matKhauConfirm" onChange={formik.handleChange} />
                                <label> Nhập lại mật khẩu</label>
                                <span className="text-danger"> {formik.errors.matKhauConfirm}</span>
                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user">
                                <input required name="hoTen" onChange={formik.handleChange} />
                                <label>Họ tên</label>
                                <span className="text-danger"> {formik.errors.hoTen}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user">
                                <input required type="email" name="email" onChange={formik.handleChange} />
                                <label>Email</label>
                                <span className="text-danger"> {formik.errors.email}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user" >
                                <input required type="number" name="soDt" onChange={formik.handleChange} />
                                <label>Số điện thoại</label>
                                <span className="text-danger"> {formik.errors.soDt}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user">
                                {/* <label>Nhóm</label> */}
                                <select name="maNhom" onChange={formik.handleChange} >
                                    <option >GP01</option>
                                    <option >GP02</option>
                                    <option >GP03</option>
                                    <option >GP04</option>
                                    <option >GP05</option>
                                    <option >GP06</option>
                                    <option >GP07</option>
                                    <option >GP08</option>
                                    <option >GP09</option>
                                    <option >GP10</option>
                                </select>
                            </div>
                        </div>
                        <div className="DN__btn">
                            <button type="submit">ĐĂNG KÝ</button>
                        </div>
                    </div>

                    <p className="text-right mt-3"><NavLink to="/dangnhap">Đã có tài khoản ? Đăng nhập ngay !</NavLink></p>
                </form>
            </div>
        </div>
    )
}
