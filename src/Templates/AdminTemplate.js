import { Fragment, useState } from "react"
import { Route } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
const menuDropdownUser = (
    <Menu>
        <Menu.Item key="0">
            <NavLink to="#">Cập nhật thông tin</NavLink>
        </Menu.Item>
        <Menu.Item key="1">
            <NavLink to="#">Đăng xuất</NavLink>
        </Menu.Item>
    </Menu>
);


export const AdminTemplate = (props) => { //props.path, props.component
    const [zoom, setZoom] = useState(true);

    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <div className="dashboard">
                <div className="row" style={{margin:0,flexWrap:"initial"}}>
                    <div className={zoom ? "col-1 col-md-3 dashboard__left" : "col-1 dashboard__left"}>
                        <div className="dashboard__img">
                            <NavLink to="/"><img src="../../img/logob.jpg"/></NavLink>
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
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </div>

        </Fragment>
    }} />
}