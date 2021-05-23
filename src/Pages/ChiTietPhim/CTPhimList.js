import React from 'react'
import { Tabs, Radio, Space, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment'

const { TabPane } = Tabs;

export default function CTPhimList(props) {
    let { heThongRap } = props;

    return (
        <div className="CTPhimList">
            <div className="Ctp__content">

                <Tabs tabPosition='left'>
                    {heThongRap?.map((htr, index) => {
                        return <TabPane tab={<div className="ctp__logo"><img src={htr.logo} />{htr.maHeThongRap}</div>} key={index}>
                            <div className="Ctp__day">
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab={<div className="day">Thứ 2</div>} key="1">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}


                                    </TabPane>
                                    <TabPane tab={<div className="day">Thứ 3</div>} key="2">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}      </TabPane>
                                    <TabPane tab={<div className="day">Thứ 4</div>} key="3">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}               </TabPane>
                                    <TabPane tab={<div className="day">Thứ 5</div>} key="4">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                    </TabPane>
                                    <TabPane tab={<div className="day">Thứ 6</div>} key="5">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                    </TabPane>
                                    <TabPane tab={<div className="day">Thứ 7</div>} key="6">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                    </TabPane>
                                    <TabPane tab={<div className="day">Chủ Nhật</div>} key="7">
                                        {htr.cumRapChieu?.map((cumRap, index) => {
                                            return <div className="Ctp__rap" key={index}>
                                                <h2>{cumRap.tenCumRap}</h2>
                                                <p>{cumRap.maCumRap}<span>[Bản đồ]</span></p>
                                                <div class="ctp__gio">
                                                    {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="ctp__time" to="/" key={index}>
                                                            <Tag className="text_time">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</Tag>
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                    </TabPane>
                                </Tabs>
                            </div>
                        </TabPane>

                    })}

                </Tabs>

            </div>
        </div>
    )
}
