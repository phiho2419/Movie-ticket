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
                <h2>Đăng Ký</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div class="row">
                        <div className="col-12" style={{ padding: 0 }}>
                            <div className="form__user">
                                <input required name="taiKhoan" onChange={formik.handleChange} />
                                <label>Tài Khoản</label>
                                <span className="text-danger"> {formik.errors.taiKhoan}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user">
                                <input required type="email" name="email" onChange={formik.handleChange} />
                                <label>Email</label>
                                <span className="text-danger"> {formik.errors.email}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user" >
                                <input required type="number" name="soDt" onChange={formik.handleChange} />
                                <label>Số điện thoại</label>
                                <span className="text-danger"> {formik.errors.soDt}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form__user">
                                <input required name="hoTen" onChange={formik.handleChange} />
                                <label>Họ Tên</label>
                                <span className="text-danger"> {formik.errors.hoTen}</span>

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form__user">
                                {/* <label>Nhóm</label> */}
                                <select name="maNhom" onChange={formik.handleChange} >
                                    <option >Gp01</option>
                                    <option >Gp02</option>
                                    <option >Gp03</option>
                                    <option >Gp04</option>
                                    <option >Gp05</option>
                                    <option >Gp06</option>
                                    <option >Gp07</option>
                                    <option >Gp08</option>
                                    <option >Gp09</option>
                                    <option >Gp10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
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
                        <div className="col-12" style={{ padding: 0 }}>
                            <div className="DN__btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <button type="submit">Đăng Ký</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-right mt-3"><NavLink to="/dangnhap">Đã có tài khoản? Đăng Nhập ngay</NavLink></p>
                </form>
            </div>
        </div>
    )
}
