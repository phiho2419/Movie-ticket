import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand header-logo p-0 pr-1" href="#">Ticket</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-align-right menu-spon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto pr-4 ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lịch chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 ">
                            <button className="btn_header btn_dangnhap" > <NavLink to="/dangnhap"> Đăng nhập</NavLink> </button>
                            <button className="btn_header btn_dangki" >  <NavLink to="/dangky"> Đăng kí</NavLink></button>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    )
}
