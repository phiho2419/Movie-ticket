import React from 'react';
import { Tabs } from 'antd';
import TabDanhSachPhim from './TabDanhSachPhim';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import { history } from '../../../App';


const { TabPane } = Tabs;

export default function TabListDanhSachRap(props) {

    //handleAfterString_TheaterName xử lý lấy tên rạp đằng sau dấu gạch
    function handleAfterString_TheaterName(string) {
        return string.substr(string.indexOf('-'), string.length)
    }

    //handlePreString_TheaterName xử lý trên rạp đằng trước dấu gạch và chọn màu 
    function handlePreString_TheaterName(stringTenRap) {
        let string = stringTenRap.substr(0, stringTenRap.indexOf('-')).replace('Star Cineplex', '');

        let string_handled = string.trim()
        if (string_handled.trim() === 'BHD') {
            return <span style={{ color: '#80eb34' }}>{string_handled}</span>
        }
        else if (string_handled.trim() === 'CGV') {
            return <span style={{ color: '#ff5252' }}>{string_handled}</span>
        }
        else if (string_handled.trim() === 'CNS') {
            return <span style={{ color: '#b434eb' }}>{string_handled}</span>
        }
        else if (string_handled.trim() === 'GLX') {
            return <span style={{ color: '#ebae34' }}>{string_handled}</span>
        }
        else if (string_handled.trim() === 'Lotte') {
            return <span style={{ color: '#ff5252' }}>{string_handled}</span>
        }
        else if (string_handled.trim() === 'MegaGS') {
            return <span style={{ color: '#ebd334' }}>{string_handled}</span>
        }
    }

    const hanleLogoRap = (tenCumRap) => {
        let string = tenCumRap.substr(0, tenCumRap.indexOf('-')).replace('Star Cineplex', '');
        let string_handled = string.trim()

        if (string_handled.trim() === 'BHD') {
            return <img src="../../../../img/BHDStar_theater.jpg" width={50} />
        }
        else if (string_handled.trim() === 'CGV') {
            return <img src="../../../../img/CGV_theater.jpg" width={50} />

        }
        else if (string_handled.trim() === 'CNS') {
            return <img src="../../../../img/CineStar_theater.jpg" width={50} />

        }
        else if (string_handled.trim() === 'GLX') {
            return <img src="../../../../img/Galaxy_theater.jpg" width={50} />

        }
        else if (string_handled.trim() === 'Lotte') {
            return <img src="../../../../img/LotteCinima_theater.jpg" width={50} />

        }
        else if (string_handled.trim() === 'MegaGS') {
            return <img src="../../../../img/MegaGS_theater.jpg" width={50} />

        }
    }




    const renderTheaterDetails = () => {
        return props.heThongRap?.map((ctr, index) => {
            return <TabPane tab={<div className=" tabpane_tabs d-flex" style={{ width: "250px" }} >
                {hanleLogoRap(ctr.tenCumRap)}
                <div className=" pl-2 pt-2 text-left tabpane_thongTinRap " style={{ width: "200px" }}>
                    <p className="m-0 tabpane_tenRap" > {handlePreString_TheaterName(ctr.tenCumRap)} <span >{handleAfterString_TheaterName(ctr.tenCumRap)}</span></p>
                    <p className="m-0 tabpane_diaChiRap" >{ctr.diaChi}</p>
                    <p className="m-0" >
                        {/* <NavLink to={`/chitietcumrap/${props.maHeThongRap}/${ctr.maCumRap}`}>[Chi tiết rạp]</NavLink> */}
                        <Link
                            activeClass="active"
                            style={{color:"#1890ff"}}
                            to="detail"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => {
                                history.push(`/chitietcumrap/${props.maHeThongRap}/${ctr.maCumRap}`)
                                setTimeout(function () {
                                    scroller.scrollTo('detail', {
                                        duration: 500,
                                        smooth: true,
                                    })
                                }, 100);
                            }}
                        >[Chi tiết rạp]</Link>
                    </p>
                </div>
            </div>} key={index} >
                <div className="pl-3">
                    <TabDanhSachPhim danhSachPhim={ctr.danhSachPhim} />
                </div>
            </TabPane>
        })
    }


    return (
        <Tabs type='card' id='tab_rap'  >
            {renderTheaterDetails()}
        </Tabs>
    );
}


