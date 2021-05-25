import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import { Tabs } from 'antd';
import { Tag } from 'antd';
import {LayChiTietRapApiAction} from '../../../Redux/Actions/QuanLyRapAction';

const { TabPane } = Tabs;

export default function TabListDanhSachRap(props) {
    const dispatch = useDispatch();
    const {chiTietRap} = useSelector(state => state.QuanLyRapReducer);

    useEffect(() => {
        dispatch(LayChiTietRapApiAction(props.maHeThongRap))
    }, [])

    
    const renderChiTietRap = () => {
        // return chiTietRap.map((ctr,index)=>{
        //     return ctr.lstCumRap.map((cr,index)=>{
        //         return 
        //     })
        // })

        return chiTietRap?.map((ctr,index)=>{
            return ctr.lstCumRap.map((cr,index)=>{
                console.log('cr',cr.danhSachPhim);
            })
        })
    }


    return (
            <Tabs tabPosition='left'>
                {renderChiTietRap()}
                <TabPane tab={<div className="row tabpane_tabs" style={{width:"250px"}} >
                <img src="./img/rapgalaxy.jpg" style={{height:"60px"}}   className="col-5 "  />
                <div className="col-7 p-0 text-left tabpane_thongTinRap">
                    <p className="m-0 tabpane_tenRap"></p>
                    <p className="m-0 tabpane_diaChiRap">116 Nguyễn Du, Q1</p>
                    <p className="m-0 tabpane_xemChiTiet">Xem chi tiết</p>
                </div>
            </div>}  key="1">
                {/* Content of tabs  */}
                <div className="row ml-2">
                    <div className='col-2'>
                        <img src='./img/Batman_V_Superman_Dawn_Of_Justice.jpg' height="60" width="60" alt="aaa"/> 
                    </div>
                    <div className="col-10">
                        <h5 className="tab_tenphim"> Batman_V_Superman_Dawn_Of_Justice </h5>
                        <div className="tab_thoigian_star"> <span className="tab_thoigian_"> 100 phút </span> <span className="tab_star_"> <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                        <Tag className="tab_thoigianchieu" color="magenta"> 10:00 </Tag>
                    </div>
                </div>
            </TabPane>
            </Tabs>
    );
}


