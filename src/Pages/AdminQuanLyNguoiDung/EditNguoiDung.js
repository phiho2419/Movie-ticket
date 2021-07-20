import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import * as Yup from 'yup';
import { Input, Button,Select } from 'antd';
// import moment from 'moment';
import { CapNhatNguoiDungAction } from '../../Redux/Actions/NguoiDungAction';

const {Option} = Select
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
                        <Input value={formik.values.taiKhoan} disabled  name="taiKhoan" onChange={formik.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <Input type="email" value={formik.values.email}  name="email" onChange={formik.handleChange} />

                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <Input type="number" value={formik.values.soDt}  name="soDt" onChange={formik.handleChange} />
                    </div>


                    <div class="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <Input value={formik.values.hoTen}  name="hoTen" onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Nhóm</label>
                                <Select className="d-block" value={formik.values.maNhom} name="maNhom" onChange={formik.handleChange} >
                                    <Option value="Gp01">GP01</Option>
                                    <Option value="Gp02">GP02</Option>
                                    <Option value="Gp03">GP03</Option>
                                    <Option value="Gp04">GP04</Option>
                                    <Option value="Gp05">GP05</Option>
                                    <Option value="Gp06">GP06</Option>
                                    <Option value="Gp07">GP07</Option>
                                    <Option value="Gp08">GP08</Option>
                                    <Option value="Gp09">GP09</Option>
                                    <Option value="Gp10">GP10</Option>
                                </Select>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <Input type="text" value={formik.values.matKhau}  name="matKhau" onChange={formik.handleChange} />
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label> Loại Người Dùng</label>
                                <Input type="text" value={formik.values.maLoaiNguoiDung}  disabled name="matKhau" onChange={formik.handleChange} />

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
