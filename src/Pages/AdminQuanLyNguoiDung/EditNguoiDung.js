import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import { CapNhatNguoiDungAction } from '../../Redux/Actions/NguoiDungAction';
export default function EditNguoiDung() {
    const { thongTinNguoiDung } = useSelector(state => state.AdminReducer);
    const dispatch = useDispatch();
    // console.log(thongTinNguoiDung);
    const formik = useFormik({
        initialValues: {
            taiKhoan: thongTinNguoiDung.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            email: thongTinNguoiDung.email,
            soDt: thongTinNguoiDung.soDt,
            maNhom: 'Gp01',
            maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
            hoTen: thongTinNguoiDung.hoTen,
        },
        enableReinitialize: true,
        onSubmit: values => {
            dispatch(CapNhatNguoiDungAction(values));
        },
    });
    return (
        <div>
            <div className="modal-header">
                <h2 style={{ margin: "0" }}>Cập nhật người dùng</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Tài Khoản</label>
                        <input value={formik.values.taiKhoan} disabled className="form-control" name="taiKhoan" onChange={formik.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={formik.values.email} className="form-control" name="email" onChange={formik.handleChange} />

                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="number" value={formik.values.soDt} className="form-control" name="soDt" onChange={formik.handleChange} />
                    </div>


                    <div class="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input value={formik.values.hoTen} className="form-control" name="hoTen" onChange={formik.handleChange} />

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Nhóm</label>
                                <select value={formik.values.maNhom} className="form-control" name="maNhom" onChange={formik.handleChange} >
                                    <option value="Gp01">Gp01</option>
                                    <option value="Gp02">Gp02</option>
                                    <option value="Gp03">Gp03</option>
                                    <option value="Gp04">Gp04</option>
                                    <option value="Gp05">Gp05</option>
                                    <option value="Gp06">Gp06</option>
                                    <option value="Gp07">Gp07</option>
                                    <option value="Gp08">Gp08</option>
                                    <option value="Gp09">Gp09</option>
                                    <option value="Gp10">Gp10</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input type="text" value={formik.values.matKhau} className="form-control" name="matKhau" onChange={formik.handleChange} />
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label> Loại Người Dùng</label>
                                <input type="text" value={formik.values.maLoaiNguoiDung} className="form-control" disabled name="matKhau" onChange={formik.handleChange} />

                            </div>
                        </div>

                        <div className="col-12 mt-3">
                            <div className="text-right">
                                <Button type="primary" htmlType="submit" className=" btn btn-primary" >Cập nhật người dùng</Button>
                            </div>
                        </div>
                    </div>
                </form>


            </div>

        </div>
    )
}
