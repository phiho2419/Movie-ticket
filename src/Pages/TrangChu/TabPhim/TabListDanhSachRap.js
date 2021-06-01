import React from 'react'
import { Tabs } from 'antd';
import { Tag } from 'antd';
import TabDanhSachPhim from './TabDanhSachPhim';

const { TabPane } = Tabs;

export default function TabListDanhSachRap(props) {


    const renderChiTietRap = () => {
        return props.heThongRap?.map((ctr, index) => {
            return <TabPane tab={<div className="row tabpane_tabs" style={{ width: "400px" }} >
                <img src={ctr.tenCumRap === 'cgv' ? 'cgv.png' : ''} style={{ height: "60px" }} className="col-3 " />
                <div className="col-9 p-0 text-left tabpane_thongTinRap">
                    <p className="m-0 tabpane_tenRap">{ctr.tenCumRap}</p>
                    <p className="m-0 tabpane_diaChiRap">{ctr.diaChi}</p>
                    <p className="m-0 tabpane_xemChiTiet">Xem chi tiết</p>
                </div>
            </div>} key={index} >
            <div className="container-fluid">
                <TabDanhSachPhim danhSachPhim={ctr.danhSachPhim} />
            </div>

            </TabPane>


        })
    }


    return (
        <Tabs tabPosition='left' >

            {renderChiTietRap()}

        </Tabs>
    );
}


