import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DesktopOutlined,  SettingOutlined } from '@ant-design/icons';



export default function AdminDashBoard() {
  return (
    <div className="dashboard">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-2 p-0">
            <div className="db_select">
                <div className="db_selectContent">
                  <p className="db_logo pt-4" > Ticket </p>
                  <div className='d-flex flex-column pl-4'>
                    <NavLink to="#" className="py-2"> <DesktopOutlined /> Quản lý phim </NavLink>
                    <NavLink to="#" className="py-2"> <SettingOutlined /> Quản lý người dùng</NavLink>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-10 p-0">
            <div className="db_nameBar d-flex px-3 justify-content-between font-weight-bold" >
                <span ><i class="fa fa-bars"></i></span>
                <span >Hello Phi <i class="fa fa-caret-down"></i></span>
                
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
