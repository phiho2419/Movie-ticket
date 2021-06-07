import React, { useEffect, useState } from 'react'
import LichSu from './LichSu'
import ThongTin from './ThongTin'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CapNhatNguoiDungAction, thongTinAction } from '../../Redux/Actions/NguoiDungAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const { TabPane } = Tabs;

export default function ThongTinCaNhan() {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.NguoiDungReducer);
    useEffect(() => {
        dispatch(thongTinAction());
    }, [])
    console.log(user);
    const formik = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: user.soDT,
            maNhom: user.maNhom,
            maLoaiNguoiDung: 'KhachHang',
            hoTen: user.hoTen,
            matKhauConfirm: '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object().shape({
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 kí tự!'),
            email: Yup.string().required('Email không được bỏ trống').email('Phải đúng dịnh dạng @email'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống'),
            soDt: Yup.number().positive('Số điện thoại phải là dạng số'),
            matKhauConfirm: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 kí tự!').oneOf([Yup.ref("matKhau"), null], "Mật khẩu nhập lại không đúng"),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),

        }),
        onSubmit: values => {
            dispatch(CapNhatNguoiDungAction(values));
        },
    });
    return (
        <div className="ThongTinCaNhan">
            <Header />
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
                            <input value={formik.values.taiKhoan} disabled className="form-control" name="taiKhoan" onChange={formik.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" value={formik.values.email} className="form-control" name="email" onChange={formik.handleChange} />
                            <p className="text-danger"> {formik.errors.email}</p>

                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="number" value={formik.values.soDt} className="form-control" name="soDt" onChange={formik.handleChange} />
                            <p className="text-danger"> {formik.errors.soDt}</p>

                        </div>


                        <div class="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Họ Tên</label>
                                    <input value={formik.values.hoTen} className="form-control" name="hoTen" onChange={formik.handleChange} />
                                    <p className="text-danger"> {formik.errors.hoTen}</p>

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
                                    <p className="text-danger"> {formik.errors.maNhom}</p>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password" value={formik.values.matKhau} className="form-control" name="matKhau" onChange={formik.handleChange} />
                                    <p className="text-danger"> {formik.errors.matKhau}</p>

                                </div>

                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label> Nhập lại mật khẩu</label>
                                    <input type="password" name="matKhauConfirm" className="form-control" onChange={formik.handleChange} />
                                    <p className="text-danger"> {formik.errors.matKhauConfirm}</p>

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
