import React, { Fragment } from 'react'
import { Tabs, Tag } from 'antd';
const { TabPane } = Tabs;

export default function CTPhimDetailsList(props) {

    let { cumRapChieu, logo } = props;

    const renderLogoChiTiet = () => {
        let tenLogo = logo.substr(0, 3).trim()
        if (tenLogo === 'BHD') {
            return <img src="../../../img/BHDStar_theater.jpg" width={80} height={100} />
        }
        else if (tenLogo === 'cgv') {
            return <img src="../../../img/CGV_theater.jpg" width={80} height={100} />
        }
        else if (tenLogo === 'Gal') {
            return <img src="../../../img/Galaxy_theater.jpg" width={80} height={100} />
        }
        else if (tenLogo === 'Cin') {
            return <img src="../../../img/CineStar_theater.jpg" width={80} height={100} />
        }
        else if (tenLogo === 'Lot') {
            return <img src="../../../img/LotteCinima_theater.jpg" width={80} height={100} />
        }
        else if (tenLogo === 'Meg') {
            return <img src="../../../img/MegaGS_theater.jpg" width={100} height={100} />
        }
    }
    const handleTenCumRap = (tenCumRap) => {
        let nameCut = tenCumRap.substr(0, 3).trim();
        let nameNeedColor = tenCumRap.substr(0, tenCumRap.indexOf('-'));
        let nameDontNeedColor = tenCumRap.substr(tenCumRap.indexOf('-'), tenCumRap.length)
        if (nameCut === 'BHD') {
            return <div className="tenCumRap" >
                <span style={{ color: '#80eb34' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "CGV") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ff5252' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "GLX") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ebae34' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "CNS") {
            return <div className="tenCumRap" >
                <span style={{ color: '#b434eb' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "Lot") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ff5252' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
        else if (nameCut === "Meg") {
            return <div className="tenCumRap" >
                <span style={{ color: '#ebd334' }}>{nameNeedColor}</span>
                <span>{nameDontNeedColor}</span>
            </div>
        }
    }

    const renderChiTietPhim = () => {
        return cumRapChieu?.map((rap, index) => {
            return <Fragment>
                <div className="d-flex my-3 " key={index}>
                    {renderLogoChiTiet()}
                    <div className='mx-2'>
                        {handleTenCumRap(rap.tenCumRap)}
                        <div>
                            {rap.lichChieuPhim?.map((lichChieu, index) => {
                                if (index <= 5) {
                                    return <Tag style={{ padding: '4px 8px', fontSize: '16px' }} color="geekblue" key={index}>{lichChieu.ngayChieuGioChieu.substr(11)}</Tag>
                                }
                            })}
                        </div>
                    </div>
                </div>
                <hr style={{ width: '80%' }} />
            </Fragment>
        })
    }

    return (
        <div>
            <Tabs defaultActiveKey="1" tabPosition='top' type="card" >
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 2</p>
                    <p>1</p>
                </div>} key="1">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 3</p>
                    <p>2</p>
                </div>} key="2">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 4</p>
                    <p>3</p>
                </div>} key="3">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 5</p>
                    <p>4</p>
                </div>} key="4">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 6</p>
                    <p>5</p>
                </div>} key="5">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Thứ 7</p>
                    <p>6</p>
                </div>} key='6'>
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>
                </TabPane>
                <TabPane tab={<div className="tabs_day">
                    <p>Chủ Nhật</p>
                    <p>7</p>
                </div>} key="7">
                    <div className="tab_chi_tiet_rap">
                        {renderChiTietPhim()}
                    </div>  
                </TabPane>

            </Tabs>
        </div>
    )
}
