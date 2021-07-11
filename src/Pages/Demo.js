import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CapNhatNguoiDungAction, thongTinAction } from '../Redux/Actions/NguoiDungAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { USERLOGIN } from '../Util/setting';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
export default function Demo() {
    

    return (
        <div className="demo" >
           <div className="block">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/zSOaBJcuxzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
        </div >

    )
}
