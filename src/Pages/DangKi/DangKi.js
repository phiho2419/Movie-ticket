import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../Redux/Actions/NguoiDungAction';

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
            taiKhoan: Yup.string().required(' không được bỏ trống!'),
            matKhau: Yup.string().required(' không được bỏ trống').min(6, ' tối thiểu 6 ký tự').max(32, ' tối đa 32 kí tự!'),
            email: Yup.string().required(' không được bỏ trống').email('Phải đúng dịnh dạng @email'),
            soDt: Yup.string().required(' không được bỏ trống'),
            soDt: Yup.number().positive(' phải là dạng số'),
            matKhauConfirm: Yup.string().required(' không được bỏ trống').min(6, ' tối thiểu 6 ký tự').max(32, ' tối đa 32 kí tự!').oneOf([Yup.ref("matKhau"), null], " nhập lại không đúng"),
            hoTen: Yup.string().required(' không được bỏ trống'),

        }),
        onSubmit: values => {
            dispatch(dangKyAction(values));
        },
    });
    return (
        <div className="DangKy">
            <div className="DK__content">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Tài Khoản</label>
                        <span className="text-danger"> {formik.errors.taiKhoan}</span>
                        <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />

                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <span className="text-danger"> {formik.errors.matKhau}</span>

                        <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} />

                    </div>
                    <div className="form-group">
                        <label> Nhập lại mật khẩu</label>
                        <span className="text-danger"> {formik.errors.matKhauConfirm}</span>
                        <input type="password" name="matKhauConfirm" className="form-control" onChange={formik.handleChange} />

                    </div>
                    <div class="row">
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <span className="text-danger"> {formik.errors.hoTen}</span>
                                <input className="form-control" name="hoTen" onChange={formik.handleChange} />

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form-group">
                                <label>Nhóm</label>
                                <select className="form-control" name="maNhom" onChange={formik.handleChange} >
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
                            <div className="form-group">
                                <label>Email</label>
                                <span className="text-danger"> {formik.errors.email}</span>
                                <input type="email" className="form-control" name="email" onChange={formik.handleChange} />

                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <span className="text-danger"> {formik.errors.soDt}</span>
                                <input type="number" className="form-control" name="soDt" onChange={formik.handleChange}/>

                            </div>
                        </div>
                    </div>
                    <div className="DK__btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
