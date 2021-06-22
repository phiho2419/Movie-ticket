import React from 'react'
import { Tabs, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import { Fragment } from 'react';
import CTPhimDetailsList from './CTPhimDetailsList'

const { TabPane } = Tabs;

export default function CTPhimList(props) {


    const renderTabPhim = () => {
        return props.heThongRap?.map((rap,index)=>{
             return <TabPane tab={<div>
                 <img src={rap.logo} width={62} />
             </div>} key={index}>
                <CTPhimDetailsList cumRapChieu={rap.cumRapChieu} logo={rap.tenHeThongRap}/>
           </TabPane>
        })
    }

    return (
        <div className="ctp_list container">
            <Tabs tabPosition="left" id='tab_ht_rap' >
                {renderTabPhim()}
            </Tabs>
        </div>
    )
}
