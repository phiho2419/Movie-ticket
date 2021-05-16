import React, { useState } from 'react'

import { Tabs } from 'antd';
import { Tag } from 'antd';
import TabListDanhSachRap from './TabListDanhSachRap';

const { TabPane } = Tabs;

export default function TabPhim() {

    const [state, setState] = useState({
        tabPosition: 'left',
    });

    const { tabPosition } = state;
    return (
        <section className="mt-5 container sectionTabPhim">
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<img src="./img/cgv.png" style={{ borderRadius: '50%' }} width="60" height="60" />} key="1">
                    <TabListDanhSachRap />
                </TabPane>
                <TabPane tab={<img src="./img/cinestar.png" style={{ borderRadius: '50%' }} width="60" height="60" />} key="2">
                    <TabListDanhSachRap />

                </TabPane>
                <TabPane tab={<img src="./img/lotte-cinema.png" style={{ borderRadius: '50%' }} width="60" height="60" />} key="3">
                    <TabListDanhSachRap />

                </TabPane>
                <TabPane tab={<img src="./img/galaxy-cinema.png" style={{ borderRadius: '50%' }} width="60" height="60" />} key="4">
                    <TabListDanhSachRap />

                </TabPane>
                
            </Tabs>
        </section>
    );
}
