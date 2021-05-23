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


    //useState chứa giá trị col của db_select và db_nameBar
    const [col, setCol] = useState({ colSelect: 'col-2', colComponent: 'col-10' });
    //Hàm changeCol thay đổi giá trị col của db_select và db_nameBar được gắn vào btn ic bar
    let changeCol = () => {
        if (col.colSelect == 'col-2') {
            setCol({ colSelect: 'd-none', colComponent: 'col-12' })
        }
        else {
            setCol({ colSelect: 'col-2', colComponent: 'col-10' })
        }
    }

    return <Route path={props.path} exact render={(propsRoute) => {
        return <Fragment>
            <div className="dashboard">
                <div className="container-fluid ">
                    <div className="row">
                        <div className={`${col.colSelect} p-0`}>
                            <div className="db_select">
                                <div className="db_selectContent">
                                    <NavLink to="/"> <p className="db_logo pt-4" > Ticket </p> </NavLink>
                                    <div className='d-flex flex-column pl-4'>
                                        <NavLink to="/admin/quanlyphim" className="py-2">  Quản lý phim </NavLink>
                                        <NavLink to="/admin/quanlynguoidung" className="py-2">  Quản lý người dùng</NavLink>
                                        <NavLink to="/admin/themphim" className="py-2">  Thêm phim </NavLink>
                                        <NavLink to="/admin/themnguoidung" className="py-2">  Thêm người dùng</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${col.colComponent} p-0`}>
                            <div className="db_nameBar d-flex px-3 justify-content-between font-weight-bold" >
                                <button onClick={changeCol}><i className="fa fa-bars px-3 mt-2" style={{fontSize:'20px'}}></i></button>
                                <Dropdown overlay={menuDropdownUser} trigger={['click']}>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                        <span >Hello Phi <i className="fa fa-caret-down"></i></span>
                                    </a>
                                </Dropdown>
                            </div>
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    }} />
}