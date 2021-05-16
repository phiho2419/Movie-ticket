import React, { useState } from 'react'

import { Tabs } from 'antd';
import { Tag } from 'antd';

const { TabPane } = Tabs;

export default function TabListDanhSachRap() {

    const [state, setState] = useState({
        tabPosition: 'left',
    });

    const { tabPosition } = state;
    return (
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<div className="row tabpane_tabs" style={{width:"250px"}}>
                    <img src="./img/rapgalaxy.jpg" style={{height:"60px"}}   className="col-5 "  />
                    <div className="col-7 p-0 text-left tabpane_thongTinRap">
                        <p className="m-0 tabpane_tenRap">GLX Nguyễn Du</p>
                        <p className="m-0 tabpane_diaChiRap">116 Nguyễn Du, Q1</p>
                        <p className="m-0 tabpane_xemChiTiet">Xem chi tiết</p>
                    </div>
                </div>}  key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab={<div className="row tabpane_tabs" style={{width:"250px"}}>
                    <img src="./img/rapgalaxy.jpg" style={{height:"60px"}}   className="col-5 "  />
                    <div className="col-7 p-0 text-left tabpane_thongTinRap">
                        <p className="m-0 tabpane_tenRap">GLX Nguyễn Du</p>
                        <p className="m-0 tabpane_diaChiRap">116 Nguyễn Du, Q1</p>
                        <p className="m-0 tabpane_xemChiTiet">Xem chi tiết</p>
                    </div>
                </div>}  key="2">
                    Content of Tab 1
                </TabPane>
                <TabPane tab={<div className="row tabpane_tabs" style={{width:"250px"}}>
                    <img src="./img/rapgalaxy.jpg" style={{height:"60px"}}   className="col-5 "  />
                    <div className="col-7 p-0 text-left tabpane_thongTinRap">
                        <p className="m-0 tabpane_tenRap">GLX Nguyễn Du</p>
                        <p className="m-0 tabpane_diaChiRap">116 Nguyễn Du, Q1</p>
                        <p className="m-0 tabpane_xemChiTiet">Xem chi tiết</p>
                    </div>
                </div>}  key="3">
                    Content of Tab 1
                </TabPane>               
            </Tabs>
    );
}


