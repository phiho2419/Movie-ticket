import React from 'react'
import { Tabs, Radio, Space, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
export default function CTRapList() {
    function callback(key) {
        console.log(key);
    }
    return (
        <div className="ctr__List">
            <div className="Ctr__content">
                <Tabs tabPosition='left'>

                    <TabPane tab={<div className="Rap"><h2>Lotte Go Vấp</h2><p>123 Trần Hưng Đạo</p></div>} key="1">
                        <div className="ctr__day">
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab={<div className="day">Thứ 2</div>} key="1">
                                    <div className="Ctr__phim">
                                        <div class="row">
                                            <div className="col-1 ctr__img">
                                                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png" />
                                            </div>
                                            <div className="col-11">

                                                <h2>Trạng tí</h2>
                                                <p>110 Phút - Đánh giá: 6/10</p>
                                                <div class="ctp__gio">
                                                    <NavLink className="ctp__time" to="/">
                                                        <Tag className="text_time">18:00</Tag>
                                                    </NavLink>
                                                    <NavLink className="ctp__time" to="/">
                                                        <Tag className="text_time">19:00</Tag>
                                                    </NavLink>
                                                    <NavLink className="ctp__time" to="/">
                                                        <Tag className="text_time">15:00</Tag>
                                                    </NavLink>
                                                    <NavLink className="ctp__time" to="/">
                                                        <Tag className="text_time">11:00</Tag>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


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

                    {/* /////////////////////////////// */}
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab 2
          </TabPane>

                    <TabPane tab="Tab 3" key="3">
                        Content of Tab 3
          </TabPane>

                </Tabs>

            </div>
        </div>
    )
}
