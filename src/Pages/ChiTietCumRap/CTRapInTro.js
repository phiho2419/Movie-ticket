import React, { Fragment } from 'react'
import { Progress } from 'antd';
import { renderIMDb } from '../../Util/services';
import { Link, animateScroll as scroll } from "react-scroll";

export default function CTRapInTro(props) {

    const renderTenRap = () => {
        return props.chiTietRap?.map((cumRap, index) => {
            return cumRap.lstCumRap?.map((rap, index) => {
                if (rap.maCumRap === props.maCumRap) {
                    return <Fragment key={index}>
                        {    document.title = `${rap.tenCumRap}`}
                        <p className="tenCumRap">{rap.tenCumRap}</p>
                        <p className="diaChi">{rap.diaChi}</p>
                    </Fragment>
                }
                else{
                    return null
                }
            })
        })
    }
    const renderLogoChiTiet = (mcr) => {
        let tenLogo = mcr.substr(0, 3).trim()
        if (tenLogo === 'bhd') {
            return "../../../img/ctrbhd.png"
        }
        else if (tenLogo === 'cgv') {
            return "../../../img/ctrcgv.png"
        }
        else if (tenLogo === 'glx') {
            return "../../../img/ctrglx.jpg"
        }
        else if (tenLogo === 'cns') {
            return "../../../img/ctrcns.jpg"
        }
        else if (tenLogo === 'lot') {
            return "../../../img/ctrlot.jpg"
        }
        else if (tenLogo === 'meg') {
            return "../../../img/ctrmeg.jpg"
        }
    }
    const styleBgImage = {
        backgroundImage: `url(${renderLogoChiTiet(props.maCumRap)})`,
    }

    return (
        <div className='ctp_intro_wrapper' style={{ position: 'relative', overflow: 'hidden' }} >
            <div className='Chitiet_intro' style={styleBgImage}><div className="ctr_overlay"></div></div>
            <div className="Chitiet_container">
                <div className="intro_content row align-items-center">
                    <div className="intro_img col-6 col-lg-4">
                        <img src={renderLogoChiTiet(props.maCumRap)} alt="intro_img" />
                    </div>
                    <div className="intro_infor col-6 col-lg-5">
                        {renderTenRap()}
                        {/* <p className="btnDatVe  d-md-inline-flex">ĐẶT VÉ</p> */}
                        <Link
                            className="btnDatVe  d-md-inline-flex"
                            style={{color:"white"}}
                            activeClass="active"
                            to="datVe"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >ĐẶT VÉ</Link>
                    </div>
                    <div className="intro_rate d-none d-lg-block col-lg-3" >
                        <div className="rate_cirle">
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={90}
                                format={(percent) => { return percent / 10 }}
                            />
                        </div>
                        <div className="rate_star mt-3">
                            {renderIMDb(9)}
                        </div>
                        <p className='nguoiDg'>65 người đánh giá</p>
                    </div>
                </div>
            </div>

        </div>
    )
}


