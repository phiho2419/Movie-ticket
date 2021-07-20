import React from 'react'
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { USERLOGIN } from '../../Util/setting';
import { dangNhapAction, thongTinAction } from '../../Redux/Actions/NguoiDungAction';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function DangNhap() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            const action = dangNhapAction(values);
            dispatch(action);

        },
    });
    if (localStorage.getItem(USERLOGIN)) {
        Swal.fire({
            icon: 'success',
            text: 'Bạn đã đăng nhập rồi!',
        })
        dispatch(thongTinAction());
        return <Redirect to="/" />
    }
    return (
        <div className="DangNhap">
            <div className="DN__content">
                <h2 className="font-weight-bold">ĐĂNG NHẬP</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__user">
                        <input name="taiKhoan" onChange={formik.handleChange} required />
                        <label>Tài khoản</label>
                        <p className="text-danger"> {formik.errors.taiKhoan}</p>
                    </div>
                    <div className="form__user">
                        <input type="password" name="matKhau" onChange={formik.handleChange} required />
                        <label>Mật khẩu</label>
                        <p className="text-danger"> {formik.errors.matKhau}</p>
                    </div>
                    <div className="DN__btn">
                        <button type="submit">ĐĂNG NHẬP</button>
                    </div>
                    <p className="text-right mt-3"><NavLink to="/dangky">Chưa có tài khoản ? Đăng ký ngay !</NavLink></p>
                </form>

            </div>

        </div>
    )
}
