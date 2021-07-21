import React from 'react'
import { Tabs } from 'antd';
// import { NavLink } from 'react-router-dom';
// import moment from 'moment'
// import { Fragment } from 'react';
import CTPhimDetailsList from './CTPhimDetailsList'
import CTPhimDanhGiaPhim from './CTPhimDanhGiaPhim'

const { TabPane } = Tabs;

export default function CTPhimList(props) {


    const renderTabPhim = () => {
        return props.heThongRap?.map((rap, index) => {
            return <TabPane tab={<div>
                <img src={rap.logo} width={62} alt="logoRap"/>
                <hr className="hr_logo" />
            </div>} key={index}>
                <CTPhimDetailsList cumRapChieu={rap.cumRapChieu} logo={rap.tenHeThongRap} />
            </TabPane>
        })
    }


    const renderMoTa = () => {
        return <div style={{ minHeight: '200px', color: 'white', padding: '0 50px' }}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p className="row">
                        <span className="col-4 font-weight-bold">Ngày khởi chiếu</span>
                        <span className="col-6">{props.ngayKhoiChieu?.substr(0, 10)}</span>
                    </p>
                    <p className="row">
                        <span className="col-4 font-weight-bold">Đạo diễn</span>
                        <span className="col-6">Victor Vũ</span>
                    </p>
                    <p className="row">
                        <span className="col-4 font-weight-bold">Diễn viên</span>
                        <span className="col-6">Bích Phương, Tăng Thanh Hà</span>
                    </p>
                    <p className="row">
                        <span className="col-4 font-weight-bold">Thể loại</span>
                        <span className="col-6">Horror, Comedy</span>
                    </p>
                    <p className="row">
                        <span className="col-4 font-weight-bold">Định dạng</span>
                        <span className="col-6">2D, 3D MAX</span>
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <p className="font-weight-bold">Nội dung</p>
                    <p >{props.moTa}</p>
                </div>
            </div>
        </div>
    }

    

    return (
        <div className="ctp_list py-5" id="datVe">
            <div className="container">
                <ul className="nav nav-tabs nav_tabs_chiTietPhim" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="film-tab" data-toggle="tab" href="#film" role="tab" aria-controls="home" aria-selected="true">Lịch chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="infor-tab" data-toggle="tab" href="#infor" role="tab" aria-controls="profile" aria-selected="false">Thông tin phim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="comment-tab" data-toggle="tab" href="#comment" role="tab" aria-controls="contact" aria-selected="false">Đánh giá</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="film" role="tabpanel">
                        <Tabs tabPosition="left" id='tab_ht_rap' >
                            {renderTabPhim()}
                        </Tabs>
                    </div>
                    <div className="tab-pane fade" id="infor" role="tabpanel" >
                        {renderMoTa()}
                    </div>
                    <div className="tab-pane fade" id="comment" role="tabpanel" >
                        <CTPhimDanhGiaPhim />
                    </div>
                </div>
            </div>
        </div>
    )
}
