import React from 'react'
import { Tabs, Radio, Space, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;

export default function CTPhimList() {
    function callback(key) {
        console.log(key);
    }
    return (
        <div className="CTPhimList">
            <div className="Ctp__content">
                <Tabs tabPosition='left'>

                    <TabPane tab={<div className="ctp__logo"><img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />Cgv cgv cgv</div>} key="1">

                        <div className="Ctp__day">
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab={<div className="day">Thứ 2</div>} key="1">
                                    <div className="Ctp__rap">
                                        <h2>GLX - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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

                                </TabPane>
                                <TabPane tab={<div className="day">Thứ 3</div>} key="2">
                                    <div className="Ctp__rap">
                                        <h2>CGV - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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
                                </TabPane>
                                <TabPane tab={<div className="day">Thứ 4</div>} key="3">
                                    <div className="Ctp__rap">
                                        <h2>L0tte - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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
                                </TabPane>
                                <TabPane tab={<div className="day">Thứ 5</div>} key="4">
                                    <div className="Ctp__rap">
                                        <h2>XYZ - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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
                                </TabPane>
                                <TabPane tab={<div className="day">Thứ 6</div>} key="5">
                                    <div className="Ctp__rap">
                                        <h2>ABC - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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
                                </TabPane>
                                <TabPane tab={<div className="day">Thứ 7</div>} key="6">
                                    <div className="Ctp__rap">
                                        <h2>DEF - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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
                                </TabPane>
                                <TabPane tab={<div className="day">Chủ Nhật</div>} key="7">
                                    <div className="Ctp__rap">
                                        <h2>Cinestar - Nguyễn Du</h2>
                                        <p>116 Nguyễn Du, Q1<span>[Bản đồ]</span></p>
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
