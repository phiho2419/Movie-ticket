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
            email:'',
            soDt:'',
            maNhom:'Gp01',
            maLoaiNguoiDung:'KhachHang',
            hoTen:'',
        },
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
                        <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input className="form-control" name="matKhau" onChange={formik.handleChange} />
                    </div>

                    <div class="row">
                        <div className="col-6" style={{ paddingLeft: '0' }}>
                            <div className="form-group">
                                <label>Họ Tên</label>
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
                                <input className="form-control" name="email" onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className="col-6" style={{ paddingRight: '0' }}>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input className="form-control" name="soDt" onChange={formik.handleChange} />
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
