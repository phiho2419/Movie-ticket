import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Tabs } from 'antd';
import { Tag } from 'antd';
import { LayChiTietRapApiAction } from '../../../Redux/Actions/QuanLyRapAction';

const { TabPane } = Tabs;

export default function TabListDanhSachRap(props) {
    const [state, setstate] = useState(1)
    const dispatch = useDispatch();
    const { chiTietRap } = useSelector(state => state.QuanLyRapReducer);

    useEffect(() => {
        dispatch(LayChiTietRapApiAction(props.maHeThongRap));
    },[])

    // console.log('props.maHeThongRap',props.maHeThongRap);  


    const renderChiTietRap = () => {
        return chiTietRap?.map((ctr, index) => {
            return ctr.lstCumRap.map((cumrap, index) => {
                // console.log('cumrap', cumrap.diaChi);
                return <TabPane tab={<div className="row tabpane_tabs" style={{ width: "400px" }} >
                    <img src="./img/rapgalaxy.jpg" style={{ height: "60px" }} className="col-3 " />
                    <div className="col-9 p-0 text-left tabpane_thongTinRap">
                        <p className="m-0 tabpane_tenRap">{cumrap.tenCumRap}</p>
                        <p className="m-0 tabpane_diaChiRap">116 Nguyễn Du, Q1</p>
                        <p className="m-0 tabpane_xemChiTiet">Xem chi tiết</p>
                    </div>
                </div>} key={index} >

                </TabPane>

                // return cumrap.danhSachPhim.map((dsphim,index)=>{
                //     console.log('dsphim',dsphim.tenPhim);
                // })
            })
        })
    }

    const log = () => {
        console.log(props)
    }

    return (
        <Tabs tabPosition='left' onClick={log()}>
            
            {renderChiTietRap()}
            
        </Tabs>
    );
}


