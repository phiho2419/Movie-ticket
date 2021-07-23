import React, { Fragment } from 'react'
import { Tabs, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

export default function CTRapDetailsList(props) {


    const renderChiTietPhim = () => {
        return props.danhSachPhim?.map((phim, index) => {
            return <Fragment key={index}>
                <div className="d-md-flex my-3 " >
                    <img src={phim.hinhAnh} alt='film_picture' width={120} height={150} style={{objectFit:'cover'}}/>
                    <div className='mx-2'>
                        <p className="font-weight-bold mb-0" style={{ fontSize: '20px' }}>{phim.tenPhim}</p>
                        <p className="m-0">Các suất chiếu:</p>
                        <div className="mt-2 ml-2">
                            {phim.lstLichChieuTheoPhim?.map((lichChieu, indexLstLichChieuTheoPhim) => {
                                if (indexLstLichChieuTheoPhim <= 5) {
                                    return <span key={indexLstLichChieuTheoPhim} className="ticket">
                                    <NavLink to={`/chitietphongve/${lichChieu.maLichChieu}`} className="font-weight-bold" style={{color:'white'}}>{lichChieu.ngayChieuGioChieu.slice(11, 16)}</NavLink>
                                </span>
                                }
                                else{
                                    return null
                                }
                            })}
                        </div>
                    </div>
                </div>
                <hr style={{ width: '80%' }} />
            </Fragment>

        })
    }

    const tagNullList = () => {
        return <Tag color="red" style={{ fontSize: '18px', padding: '4px 8px' }}>Ngày này không có lịch chiếu</Tag>
    }
    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition='top' type="card" >
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 2</p>
                    <p>Ngày 1</p>
                </div>} key="1">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                   
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 3</p>
                    <p>Ngày 2</p>
                </div>} key="2">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 4</p>
                    <p>Ngày 3</p>
                </div>} key="3">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 5</p>
                    <p>Ngày 4</p>
                </div>} key="4">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 6</p>
                    <p>Ngày 5</p>
                </div>} key="5">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 7</p>
                    <p>Ngày 6</p>
                </div>} key='6'>
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Chủ Nhật</p>
                    <p>Ngày 7</p>
                </div>} key="7">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 2</p>
                    <p>Ngày 8</p>
                </div>} key="8">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 3</p>
                    <p>Ngày 9</p>
                </div>} key="9">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 4</p>
                    <p>Ngày 10</p>
                </div>} key="10">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 5</p>
                    <p>Ngày 11</p>
                </div>} key="11">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 6</p>
                    <p>Ngày 12</p>
                </div>} key="12">
                    <div className="tab_chi_tiet_rap">
                        {tagNullList()}
                    </div>
                </TabPane>

            </Tabs>
        </div>
    )
}
