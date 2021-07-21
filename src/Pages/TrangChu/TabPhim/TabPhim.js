import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Tabs } from 'antd';
import TabListDanhSachRap from './TabListDanhSachRap';

import { callApi_layThongTinHeThongRap } from '../../../Redux/Actions/QuanLyRapAction';
import { Fragment } from 'react';


const { TabPane } = Tabs;


export default function TabPhim() {

    const dispatch = useDispatch();
    const { mangRap } = useSelector(state => state.QuanLyRapReducer);

    useEffect(() => {
        dispatch(callApi_layThongTinHeThongRap())
    }, [dispatch])


    const renderMangRap = () => {
        return mangRap.map((rap, index) => {
            return <TabPane  tab={<Fragment> <img className="logo__rap"  src={rap.logo}  alt="logo"/> <hr className="hr_logo"/></Fragment>} key={index} centered="true">
                <TabListDanhSachRap heThongRap={rap.lstCumRap} logoRap={rap.logo} maHeThongRap={rap.maHeThongRap}/>
            </TabPane>
        })
    }

    return (
        <section className="py-5 container sectionTabPhim">
            <Tabs centered type="line" tabPosition="left" id="tab_phim">
                {renderMangRap()}
            </Tabs>
        </section>
    );
}


