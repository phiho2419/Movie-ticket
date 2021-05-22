import { Fragment } from "react"
import { Route } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import { DesktopOutlined,  SettingOutlined } from '@ant-design/icons';

//HOC higher order component
//component nhận vào tham số là component và trả ra component mới
export const AdminTemplate = (props) => { //props.path, props.component
    //Thẻ route sẽ được hiển giao diện tương ứng khi người dùng gõ đúng path
    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <div className="dashboard">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-2 p-0">
                            <div className="db_select">
                                <div className="db_selectContent">
                                    <p className="db_logo pt-4" > Ticket </p>
                                    <div className='d-flex flex-column pl-4'>
                                        <NavLink to="/admin/quanlyphim" className="py-2">  Quản lý phim </NavLink>
                                        <NavLink to="/admin/quanlynguoidung" className="py-2">  Quản lý người dùng</NavLink>
                                        <NavLink to="/admin/themphim" className="py-2">  Thêm phim </NavLink>
                                        <NavLink to="/admin/themnguoidung" className="py-2">  Thêm người dùng</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 p-0">
                            <div className="db_nameBar d-flex px-3 justify-content-between font-weight-bold" >
                                <button><i className="fa fa-bars"></i></button>
                                <span >Hello Phi <i className="fa fa-caret-down"></i></span>                                
                            </div>
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    }} />
}