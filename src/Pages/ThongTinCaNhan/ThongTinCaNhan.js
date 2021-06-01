import React, { useEffect, useState } from 'react'
import LichSu from './LichSu'
import ThongTin from './ThongTin'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CapNhatNguoiDungAction, thongTinAction } from '../../Redux/Actions/NguoiDungAction';
import { useFormik } from 'formik';

const { TabPane } = Tabs;

export default function ThongTinCaNhan() {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const { user, taiKhoan } = useSelector(state => state.NguoiDungReducer);
    useEffect(() => {
        dispatch(thongTinAction(taiKhoan));
    },[])

    const formik = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: user.soDT,
            maNhom: user.maNhom,
            maLoaiNguoiDung: 'KhachHang',
            hoTen: user.hoTen,
        },
        enableReinitialize: true,

        onSubmit: values => {
            dispatch(CapNhatNguoiDungAction(values));
        },
    });
    return (
        <div className="ThongTinCaNhan">
            <div className="TT_content">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<p>Thông Tin Chi Tiết</p>} key="1">
                        <ThongTin user={user} />
                        <div className="Edit__button">
                            <button className="TT__button" onClick={() => {
                                if (edit) {
                                    document.querySelector('.Edit').style.display = 'none';
                                    document.querySelector('.TT__button').style.backgroundColor = '#ff867f';
                                } else {
                                    document.querySelector('.Edit').style.display = 'block';
                                    document.querySelector('.TT__button').style.backgroundColor = '#ff5252';
                                }
                                setEdit(!edit)
                            }}>Chỉnh Sửa</button>
                        </div>
                    </TabPane>
                    <TabPane tab={<p>Lịch Sử Đặt Vé</p>} key="2">
                        <LichSu ThongTinDatVe={user.thongTinDatVe} />
                    </TabPane>

                </Tabs>
            </div>
            <div className="Edit">
                <div className="Edit__content">
                    <h2>Chỉnh Sửa Thông Tin</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label>Tài Khoản</label>
                            <input value={formik.values.taiKhoan} className="form-control" name="taiKhoan" onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input value={formik.values.matKhau} className="form-control" name="matKhau" onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label> Nhập lại mật khẩu</label>
                            <input className="form-control" />
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
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={formik.values.email} className="form-control" name="email" onChange={formik.handleChange} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input value={formik.values.soDt} className="form-control" name="soDt" onChange={formik.handleChange} />
                                </div>
                            </div>
                            <div className="Edit__button">
                                <button type="submit" className="TT__button">Cập Nhật</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
