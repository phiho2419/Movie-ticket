import React from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';
import { history } from '../../App';
// import logo from './img/logob.jpg'

export default function Header() {
    let dataUser = JSON.parse(localStorage.getItem('userLogin'));

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <NavLink to='/'>
                        <img className="navbar-brand header-logo p-0 pr-1 img-fluid" style={{ width: '70px', objectFit: 'cover', height: '60px' }} src="../../../img/logob.jpg" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto  ">

                            <li className="nav-item">
                                <a className="nav-link" href="#">Lịch chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Ứng dụng</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 ">
                            {
                                localStorage.getItem('userLogin') ?
                                    <Fragment>
                                        <NavLink to='/thongtincanhan' className="btn_header btn_dangnhap">{dataUser.hoTen}</NavLink>
                                        <NavLink to="#" style={{ outline: 'none' }} className="btn_header btn_dangki" onClick={() => {
                                            Swal.fire({
                                                icon: 'question',
                                                title: 'Bạn có chắc muốn đăng xuất?',
                                                showCancelButton: true,
                                                cancelButtonText: 'Hủy bỏ',
                                                confirmButtonText: ' Xác Nhận',
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    localStorage.removeItem('userLogin');
                                                    localStorage.removeItem('accesstoken');
                                                    history.push('/');
                                                }
                                            })

                                        }}>Đăng xuất</NavLink>
                                    </Fragment> :
                                    <Fragment>
                                        <NavLink to="/dangnhap" className="btn_header btn_dangnhap"><i className="fa fa-user-circle" style={{ fontSize: '20px', paddingBottom: '3px' }}></i> <span>Đăng nhập</span></NavLink>
                                        <NavLink to="/dangky" className="btn_header btn_dangki"> Đăng kí <i className="fa fa-user" style={{ fontSize: '20px', paddingBottom: '3px' }}></i></NavLink>
                                    </Fragment>
                            }
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    )
}