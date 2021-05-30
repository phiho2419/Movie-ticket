import React, { useEffect, useState } from 'react';

import { Tabs, Radio, Space, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { ChangeRap } from '../../Redux/Actions/QuanLyRapAction';

const { TabPane } = Tabs;
export default function CTRapList(props) {
    let { chiTietRap } = props;
    const dispatch = useDispatch();

    useEffect(()=>{
        chiTietRap?.map((ctr, index) => {
            // dispatch(ChangeRap(ctr.lstCumRap[0].tenCumRap, ctr.lstCumRap[0].diaChi));

        })

    })
    return (
        <div className="ctr__List">
            <div className="Ctr__content">

                <Tabs tabPosition='left' defaultActiveKey="1" >
                    {chiTietRap?.map((ctr, index) => {
                        return ctr.lstCumRap?.map((cr, index) => {
                            return <TabPane tab={<div className="Rap" onClick={() => {
                                dispatch(ChangeRap(cr.tenCumRap, cr.diaChi));
                                // console.log(cr.diaChi);
                            }}><h2>{cr.tenCumRap}</h2><p>{cr.diaChi}</p></div>} key={index} >
                                <div className="ctr__day" >
                                    <Tabs >
                                        <TabPane tab={<div className="day">Thứ 2</div>} key="1" >
                                            {cr.danhSachPhim?.map((dsp, index) => {
                                                return <div className="Ctr__phim" key={index}>
                                                    <div class="row">
                                                        <div className="col-1 ctr__img">
                                                            <img src={dsp.hinhAnh} />
                                                        </div>
                                                        <div className="col-11">

                                                            <h2>{dsp.tenPhim}</h2>
                                                            <p></p>
                                                            <div class="ctp__gio">
                                                                {dsp.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                    return <NavLink className="ctp__time" to="/" key={index}>
                                                                        <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                                    </NavLink>
                                                                })}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            })}

                                        </TabPane>
                                        <TabPane tab={<div className="day">Thứ 3</div>} key="2">

                                        </TabPane>
                                        <TabPane tab={<div className="day">Thứ 4</div>} key="3">
                                        </TabPane>
                                        <TabPane tab={<div className="day">Thứ 5</div>} key="4">
                                        </TabPane>
                                        <TabPane tab={<div className="day">Thứ 6</div>} key="5">
                                        </TabPane>
                                        <TabPane tab={<div className="day">Thứ 7</div>} key="6">
                                        </TabPane>
                                        <TabPane tab={<div className="day">Chủ Nhật</div>} key="7">
                                        </TabPane>
                                    </Tabs>

                                </div>

                            </TabPane>
                        })


                    })}


                </Tabs>

            </div>
        </div>
    )
}
