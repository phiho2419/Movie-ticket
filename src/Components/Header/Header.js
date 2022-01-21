import React from 'react'
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';
import { history } from '../../App';
import { Link,  scroller } from "react-scroll";
import LogoHeader from '../../assets/publicImg/logoHeader.png';
import LogoCircle from '../../assets/publicImg/logoCircle.png';

export default function Header() {
    let dataUser = JSON.parse(localStorage.getItem('userLogin'));

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <NavLink to='/' style={{position:'relative'}}>
                        <img id="logo_circle" style={{width: '78px', objectFit: 'cover', height: '60px'}} className="navbar-brand header-logo p-0 pr-1 img-fluid"  src={LogoCircle} alt="logo"/>
                        <img style={{position:'absolute',top:'0',left:'0',width: '85px', objectFit: 'cover', height: '60px'}} className="navbar-brand header-logo p-0 pr-1 img-fluid"  src={LogoHeader} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-3 justify-content-center">
                            {
                                localStorage.getItem('userLogin') ?
                                    <Fragment>
                                        <NavLink to='/thongtincanhan' className="btn_header btn_dangnhap"> <img className="avatar" src={`https://i.pravatar.cc/150?u=${dataUser.taiKhoan}`} alt="avatar" /> {dataUser.hoTen} </NavLink>
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
                                        <NavLink to="/dangnhap" className="btn_header btn_dangnhap d-flex"><i className="fa fa-user-circle" style={{ fontSize: '20px', paddingBottom: '3px', paddingRight:"3px" }}></i> <span>Đăng Nhập</span></NavLink>
                                        <NavLink to="/dangky" className="btn_header btn_dangki d-flex"> Đăng Kí <i className="fa fa-user" style={{ fontSize: '20px', paddingBottom: '3px', paddingLeft:"3px" }}></i></NavLink>
                                    </Fragment>
                            }
                        </form>
                        <ul className="navbar-nav m-auto  ">

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="listPhim"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        history.push('/')
                                        setTimeout(function () {
                                            scroller.scrollTo('listPhim', {
                                                duration: 500,
                                                smooth: true,
                                            })
                                        }, 100);
                                    }}
                                >Lịch Chiếu</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="tabPhim"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        history.push('/')
                                        setTimeout(function () {
                                            scroller.scrollTo('tabPhim', {
                                                duration: 500,
                                                smooth: true,
                                            })
                                        }, 100);
                                    }}
                                >Cụm Rạp</Link>

                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="tinTuc"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        history.push('/')
                                        setTimeout(function () {
                                            scroller.scrollTo('tinTuc', {
                                                duration: 500,
                                                smooth: true,
                                            })
                                        }, 100);
                                    }}
                                >Tin Tức</Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="ungDung"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => {
                                        history.push('/')
                                        setTimeout(function () {
                                            scroller.scrollTo('ungDung', {
                                                duration: 500,
                                                smooth: true,
                                            })
                                        }, 100);
                                    }}
                                >Ứng dụng</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}