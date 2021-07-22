import { Fragment, useState } from "react"
import { Redirect, Route } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { history } from "../App";
import { USERLOGIN } from "../Util/setting";

export const AdminTemplate = (props) => { //props.path, props.component
    const [zoom, setZoom] = useState(true);
    if (!localStorage.getItem(USERLOGIN)) {
        return <Redirect to="/dangnhap" />
    }
    let dataUser = JSON.parse(localStorage.getItem('userLogin'));
    if (!localStorage.getItem('userLogin')) {
        Swal.fire({
            icon: 'error',
            text: 'Bạn vui lòng đăng nhập !',
        })
        return <Redirect to="/dangnhap" />
    } else if (dataUser.maLoaiNguoiDung !== "QuanTri") {
        Swal.fire({
            icon: 'error',
            text: 'Không có quyền quản trị !',
        })
        return <Redirect to="/" />
    }

    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <div className="dashboard ">
                <div className="container-fluid pl-0">
                    <div className="row" style={{ margin: 0, flexWrap: "initial" }}>
                        <div className={zoom ? "col-1 col-md-3 dashboard__left" : "col-1 dashboard__left"} style={{ height: '100vh' }}>
                            <div className="dashboard__img" style={{ position: 'relative' }}>
                                <NavLink to='/' >
                                    <img id="logo_circle" style={{ width: '90px', objectFit: 'cover', height: '90px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src="../../../img/logoheader.png" alt="logo" />
                                    <img style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-55%)', width: '90px', objectFit: 'cover', height: '90px' }} className=" header-logo p-0 pr-1 img-fluid" src="../../../img/logoheaderA.png" alt="logo" />
                                </NavLink>
                            </div>
                            <div className="db__zoom d-none d-md-block" style={zoom ? { right: "50px" } : { left: "15px" }}>
                                <button onClick={() => {
                                    setZoom(!zoom);
                                }}><i style={{ color: 'white' }} className={zoom ? "fas fa-long-arrow-alt-left" : "fas fa-long-arrow-alt-right"}></i></button>
                            </div>
                            <ul className="navbar-nav mr-auto dashboard__list">
                                <li className="nav-item">
                                    <NavLink className="db__item" to="/admin/quanlyphim" aria-selected="true"> <i className="fas fa-video"></i>
                                        {zoom ? <span className="d-none d-md-inline">Quản Lý Phim</span> : ''}
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="db__item" to="/admin/quanlynguoidung" aria-selected="false"> <i className="fas fa-user"></i>
                                        {zoom ? <span className="d-none d-md-inline">Quản Lý Người Dùng</span> : ''}

                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="db__item" to="/admin/taolichchieu" aria-selected="false"><i className="fas fa-clock"></i>
                                        {zoom ? <span className="d-none d-md-inline">Thêm Lịch Chiếu</span> : ''}

                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="db__item" to="/admin/themnguoidung" aria-selected="false"><i className="fas fa-users"></i>
                                        {zoom ? <span className="d-none d-md-inline">Thêm Người Dùng</span> : ''}

                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="db__item" to="/admin/themphim" aria-selected="false"><i className="fas fa-film"></i>
                                        {zoom ? <span className="d-none d-md-inline">Thêm Phim</span> : ''}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={zoom ? "col-11 col-md-9 dashboard__right" : "col-11 dashboard__right"}>
                            <div className="header__admin font-weight-bold "  >
                                <div>
                                    <NavLink to='/thongtincanhan' className="btn_header btn_dangnhap" style={{ color: 'white', minWidth: '150px' }}>{dataUser.hoTen}</NavLink>
                                    <NavLink to="#" style={{ outline: 'none', color: 'white' }} className="btn_header btn_dangki" onClick={() => {
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

                                    }}>Đăng Xuất</NavLink>
                                </div>
                            </div>
                            <props.component {...propsRoute} />
                        </div>
                    </div>

                </div>
            </div>

        </Fragment>
    }} />
}