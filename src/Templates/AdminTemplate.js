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

    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <div className="dashboard">
                <div className="row" style={{ margin: 0, flexWrap: "initial" }}>
                    <div className={zoom ? "col-1 col-md-3 dashboard__left" : "col-1 dashboard__left"} style={{height:'100vh'}}>
                        <div className="dashboard__img">
                            <NavLink to="/"><img src="../../img/logob.jpg" /></NavLink>
                        </div>
                        <div className="db__zoom d-none d-md-block" style={zoom ? { right: "50px" } : { left: "15px" }}>
                            <button onClick={() => {
                                setZoom(!zoom);
                            }}><i class={zoom ? "fas fa-long-arrow-alt-left" : "fas fa-long-arrow-alt-right"}></i></button>
                        </div>
                        <ul class="navbar-nav mr-auto dashboard__list">
                            <li class="nav-item">
                                <NavLink className="db__item" to="/admin/quanlyphim" aria-selected="true"> <i class="fas fa-video"></i>
                                    {zoom ? <span className="d-none d-md-inline">Quản Lý Phim</span> : ''}
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="db__item" to="/admin/quanlynguoidung" aria-selected="false"> <i class="fas fa-user"></i>
                                    {zoom ? <span className="d-none d-md-inline">Quản Lý Người Dùng</span> : ''}

                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="db__item" to="/admin/taolichchieu" aria-selected="false"><i class="fas fa-clock"></i>
                                    {zoom ? <span className="d-none d-md-inline">Thêm Lịch Chiếu</span> : ''}

                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="db__item" to="/admin/themnguoidung" aria-selected="false"><i class="fas fa-users"></i>
                                    {zoom ? <span className="d-none d-md-inline">Thêm Người Dùng</span> : ''}

                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="db__item" to="/admin/themphim" aria-selected="false"><i class="fas fa-film"></i>
                                    {zoom ? <span className="d-none d-md-inline">Thêm Phim</span> : ''}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={zoom ? "col-11 col-md-9 dashboard__right" : "col-11 dashboard__right"}>
                    <div className="header__admin">
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

                        }}>Đăng Xuất</NavLink>
                    </Fragment>
                </div>
                        <props.component {...propsRoute} />
                    </div>
                </div>
          
            </div>

        </Fragment>
    }} />
}