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
import LoadingScreen from 'react-loading-screen';
import Load from '../assets/git/load.gif'

export default function Demo() {


    return (
        <LoadingScreen
            loading={true}
            bgColor='transparent'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            logoSrc={Load}
            text='Here an introduction sentence (Optional)'
        >
           <div>Loadable content</div>
        </LoadingScreen>


    )
}
