import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { USERLOGIN } from '../../Util/setting';
import { dangNhapAction, thongTinAction } from '../../Redux/Actions/NguoiDungAction';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
export default function DangNhap() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu khộng được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 kí tự!')
        }),
        onSubmit: values => {
            const action = dangNhapAction(values);
            dispatch(action);

        },
    });
    if (localStorage.getItem(USERLOGIN)) {
        alert('Bạn đã đăng nhập thành công!');
        dispatch(thongTinAction());
        return <Redirect to="/" />
    }
    return (
        <div className="DangNhap">
            <div className="DN__content">
                <h2>Đăng Nhập</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__user">
                        <input name="taiKhoan" onChange={formik.handleChange} required />
                        <label>Tài Khoản</label>
                        <p className="text-danger"> {formik.errors.taiKhoan}</p>
                    </div>
                    <div className="form__user">
                        <input name="matKhau" onChange={formik.handleChange} required />
                        <label>Mật Khẩu</label>
                        <p className="text-danger"> {formik.errors.matKhau}</p>
                    </div>
                    <div className="DN__btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button type="submit">Đăng Nhập</button>
                    </div>
                    <p className="text-right mt-3"><NavLink to="/dangky">Chưa có tài khoản? Đăng Ký ngay</NavLink></p>
                </form>

            </div>

        </div>
    )
}
