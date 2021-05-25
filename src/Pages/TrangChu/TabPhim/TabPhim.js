import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

import { Tabs } from 'antd';
import TabListDanhSachRap from './TabListDanhSachRap';

import { callApi_layThongTinHeThongRap } from '../../../Redux/Actions/QuanLyRapAction';

const { TabPane } = Tabs;


export default function TabPhim() {

    const dispatch = useDispatch();
    const { mangRap } = useSelector(state => state.QuanLyRapReducer);

    useEffect(() => {
        dispatch(callApi_layThongTinHeThongRap())
    }, [])


    const renderMangRap = () => {
        return mangRap.map((rap, index) => {
            return <TabPane tab={<img src={rap.logo} style={{ borderRadius: '50%' }} width="64" height="64" />} key={index}>
                <TabListDanhSachRap maHeThongRap={rap.maHeThongRap} />
            </TabPane>
        })
    }

    return (
        <section className="mt-5 container sectionTabPhim">
            <Tabs >
                
                {renderMangRap()}

            </Tabs>
        </section>
    );
}


