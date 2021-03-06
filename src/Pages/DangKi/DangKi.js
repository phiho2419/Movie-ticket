import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../Redux/Actions/NguoiDungAction';
import { NavLink } from 'react-router-dom';

export default function DangKi() {
    const dispatch = useDispatch()
    document.title = "Đăng Ký";
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
            matKhau: Yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, ' tối đa 32 kí tự!'),
            email: Yup.string().email('Phải đúng dịnh dạng @email'),
            soDt: Yup.number().positive('Số điện thoại phải là dạng số'),
            matKhauConfirm: Yup.string().min(6, 'mật khẩu tối thiểu 6 ký tự').max(32, ' tối đa 32 kí tự!').oneOf([Yup.ref("matKhau"), null], " nhập lại không đúng"),

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
                    <div className="row">
                        <div className="col-12" style={{ padding: 0 }}>
                            <div className="form__user">
                                <input required name="taiKhoan" onChange={formik.handleChange} />
                                <label>Tài khoản *</label>
                                <span className="text-danger"> {formik.errors.taiKhoan}</span>

                            </div>

                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user">
                                <input required type="password" name="matKhau" onChange={formik.handleChange} />
                                <label>Mật khẩu *</label>
                                <span className="text-danger"> {formik.errors.matKhau}</span>
                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user">
                                <input required type="password" name="matKhauConfirm" onChange={formik.handleChange} />
                                <label> Nhập lại mật khẩu *</label>
                                <span className="text-danger"> {formik.errors.matKhauConfirm}</span>
                            </div>
                        </div>
                        <div className="col-12" style={{ padding: '0' }}>
                            <div className="form__user">
                                <input required name="hoTen" onChange={formik.handleChange} />
                                <label>Họ tên *</label>
                                <span className="text-danger"> {formik.errors.hoTen}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user">
                                <input required type="email" name="email" onChange={formik.handleChange} />
                                <label>Email *</label>
                                <span className="text-danger"> {formik.errors.email}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user" >
                                <input required  name="soDt" onChange={formik.handleChange} />
                                <label>Số điện thoại *</label>
                                <span className="text-danger"> {formik.errors.soDt}</span>

                            </div>
                        </div>
                        <div className="DN__btn">
                            <button type="submit">ĐĂNG KÝ</button>
                        </div>
                    </div>

                    <p className="text-right mt-3 user__tt"><NavLink to="/dangnhap">Đã có tài khoản ? Đăng nhập ngay !</NavLink></p>
                </form>
            </div>
        </div>
    )
}
