import React, { useEffect } from 'react'
import { Button } from 'antd'
// import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CapNhatNguoiDungAction, thongTinAction } from '../../Redux/Actions/NguoiDungAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { USERLOGIN } from '../../Util/setting';

// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import LichSuDatVe from './LichSuDatVe';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';




const customStylesDoiMatKhau = {
    content: {
        width: '350px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// const { TabPane } = Tabs;

export default function ThongTinCaNhan() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.NguoiDungReducer);
    document.title = "Thông Tin Cá Nhân";
    let usLogin = '';
    if (localStorage.getItem(USERLOGIN)) {
        usLogin = JSON.parse(localStorage.getItem(USERLOGIN));
    }
    
    

    const [modalMatKhau, setModalMatKhau] = React.useState(false);
    function openDoiMatKhau() {
        setModalMatKhau(true);
    }
    function closeDoiMatKhau() {
        setModalMatKhau(false);
    }

    const [modalHoTen, setModalHoTen] = React.useState(false);
    function openDoiHoTen() {
        setModalHoTen(true);
    }
    function closeDoiHoTen() {
        setModalHoTen(false);
    }

    const [modalEmail, setModalEmail] = React.useState(false);
    function openDoiEmail() {
        setModalEmail(true);
    }
    function closeDoiEmail() {
        setModalEmail(false);
    }

    const [modalSdt, setModalSdt] = React.useState(false);
    function openDoiSdt() {
        setModalSdt(true);
    }
    function closeDoiSdt() {
        setModalSdt(false);
    }


    useEffect(() => {
        dispatch(thongTinAction(usLogin.taiKhoan));
    }, [dispatch,usLogin.taiKhoan])
    const formik = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: user.soDT,
            maNhom: user.maNhom,
            maLoaiNguoiDung: 'QuanTri',
            hoTen: user.hoTen,
            matKhauConfirm: '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object().shape({
            matKhau: Yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 kí tự!'),
            email: Yup.string().email('Phải đúng dịnh dạng @email'),
            soDt: Yup.number().typeError('Số điện thoại phải là dạng số'),
            matKhauConfirm: Yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 kí tự!').oneOf([Yup.ref("matKhau"), null], "Mật khẩu nhập lại không đúng"),
            hoTen: Yup.string().required('Họ tên không được bỏ trống'),

        }),
        onSubmit: values => {
            dispatch(CapNhatNguoiDungAction(values));
        },
    });


    if(!localStorage.getItem(USERLOGIN)){
        Swal.fire({
            icon:'error',
            title:'Bạn chưa đăng nhập !'
        });
        return <Redirect to="/dangnhap" />
    }
    return (
        <div className="ThongTinCaNhan" >
            <div className="content_paper container-lg">
                <div className="bg_image ">
                    <div className="row ">
                        <div className="d-none d-lg-block col-lg-3 text-center col-avatar">
                            <img className="avatar" src={`https://i.pravatar.cc/150?u=${user.taiKhoan}`} alt="avatar" />
                        </div>
                        <div className="col-12 col-lg-8 infor_details pt-2">
                            <hr />
                            <p className="row justify-content-center">
                                <span className="col-3 col-lg-3">Họ tên : </span>
                                <span className="col-5 col-lg-4 ">{user.hoTen}</span>
                                <span className="col-3 col-lg-4">
                                    <Button className="chinhSua" onClick={openDoiHoTen}> Chỉnh sửa </Button>
                                </span>
                            </p>
                            <hr />

                            <p className="row justify-content-center">
                                <span className="col-3 col-lg-3">Email :</span>
                                <span className="col-5 col-lg-4">{user.email}</span>
                                <span className="col-3 col-lg-4">
                                    <Button className="chinhSua" onClick={openDoiEmail}> Chỉnh sửa </Button>
                                </span>
                            </p>
                            <hr />
                            <p className="row justify-content-center">
                                <span className="col-3 col-lg-3"> Số điện thoại :</span>
                                <span className="col-5 col-lg-4">{user.soDT}</span>
                                <span className="col-3 col-lg-4">
                                    <Button className="chinhSua" onClick={openDoiSdt}> Chỉnh sửa </Button>
                                </span>
                            </p>
                            <hr />
                            <p className="row justify-content-center">
                                <span className="col-3 col-lg-3"> {usLogin.maLoaiNguoiDung === "KhachHang" ? "Tài khoản khách" : "Tài khoản Admin"}</span>
                                <span className="col-5 col-lg-4">
                                    {usLogin.maLoaiNguoiDung === "QuanTri" ? <Button className="chinhSua"><NavLink to="/admin/quanlyphim">Admin</NavLink></Button> : ''}
                                </span>
                                <span className="col-3 col-lg-4">
                                    <Button className="doiMatKhau" onClick={openDoiMatKhau}> Đổi mật khẩu </Button>
                                </span>
                            </p>

                        </div>
                    </div>


                </div>
                <div className="mt-3">
                    <LichSuDatVe thongTinDatVe={user.thongTinDatVe} />
                </div>
            </div>


            {/* MODAL ĐỔI MẬT KHẨU  */}
            <Modal
                isOpen={modalMatKhau}
                onRequestClose={closeDoiMatKhau}
                style={customStylesDoiMatKhau}
            >
                <h2 className="text-center font-weight-bold">Đổi mật khẩu</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__user">
                        <input type="password" name="matKhau" onChange={formik.handleChange} required />
                        <label>Mật khẩu mới</label>
                        <p className="text-danger"> {formik.errors.matKhau}</p>
                    </div>
                    <div className="form__user">
                        <input type="password" name="matKhauConfirm" onChange={formik.handleChange} required />
                        <label> Nhập lại mật khẩu</label>
                        <p className="text-danger"> {formik.errors.matKhauConfirm}</p>
                    </div>
                    <div className="btn_doiMatKhau text-center">
                        <button type="submit" className="btn_doi">OK</button>
                    </div>
                </form>
            </Modal>

            {/* MODAL ĐỔI HỌ TÊN */}
            <Modal
                isOpen={modalHoTen}
                onRequestClose={closeDoiHoTen}
                style={customStylesDoiMatKhau}
            >
                <h2 className="text-center font-weight-bold">Đổi Họ Tên</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__user">
                        <input value={formik.values.hoTen} name="hoTen" onChange={formik.handleChange} required />
                        <label>Họ tên mới</label>
                        <p className="text-danger"> {formik.errors.hoTen}</p>
                    </div>
                    <div className="btn_doiMatKhau text-center">
                        <button type="submit" className="btn_doi">OK</button>
                    </div>
                </form>
            </Modal>

            {/* MODAL ĐỔI EMAIL */}
            <Modal
                isOpen={modalEmail}
                onRequestClose={closeDoiEmail}
                style={customStylesDoiMatKhau}
            >
                <h2 className="text-center font-weight-bold">Đổi EMAIL</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__user">
                        <input type="email" value={formik.values.email} name="email" onChange={formik.handleChange} required />
                        <p className="text-danger"> {formik.errors.email}</p>
                        <label>Email mới</label>
                        {/* <p className="text-danger"> {formik.errors.matKhau}</p> */}
                    </div>
                    <div className="btn_doiMatKhau text-center">
                        <button type="submit" className="btn_doi">OK</button>
                    </div>
                </form>
            </Modal>

            {/* MODAL ĐỔI SĐT */}
            <Modal
                isOpen={modalSdt}
                onRequestClose={closeDoiSdt}
                style={customStylesDoiMatKhau}
            >
                <h2 className="text-center font-weight-bold">Đổi số điện thoại</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__user">
                        <input value={formik.values.soDt} name="soDt" onChange={formik.handleChange} required />
                        <label>Số điện thoại mới</label>
                        <p className="text-danger"> {formik.errors.soDt}</p>
                    </div>
                    <div className="btn_doiMatKhau text-center">
                        <button type="submit" className="btn_doi">OK</button>
                    </div>
                </form>
            </Modal>


        </div >

    )
}
