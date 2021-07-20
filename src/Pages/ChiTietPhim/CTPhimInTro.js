import React  from 'react'
import {  Progress } from 'antd';
// import ModalVideo from 'react-modal-video';
// import moment from 'moment'
import { renderIMDb } from '../../Util/services'
import { Link, animateScroll as scroll } from "react-scroll";


// const { TabPane } = Tabs;
export default function CTPhimInTro(props) {

    let { chiTietPhim } = props;
    // const [isOpen, setOpen] = useState(false)


    const styleBgImage = {
        backgroundImage: `url(${chiTietPhim.hinhAnh})`,
    }



    return (
        <div className='ctp_intro_wrapper' style={{ position: 'relative', overflow: 'hidden' }} >
            <div className='ctp_intro' style={styleBgImage}><div className="ctp_overlay"></div></div>
            <div className="ctp_container">
                <div className="intro_content row align-items-center">
                    <div className="intro_img col-6 col-lg-4">
                        <img src={chiTietPhim.hinhAnh} alt="intro_img" />
                    </div>
                    <div className="intro_infor col-6 col-lg-5">
                        <p className="ngayKhoiChieu "> {chiTietPhim.ngayKhoiChieu?.substr(0, 10)}</p>
                        <p className="m-0 d-inline">
                            <span className="tag_phim_c18 m-0">C16</span>
                            <span className="infor_tenPhim ml-2">{chiTietPhim.tenPhim}</span>
                        </p>
                        <p >105p - {chiTietPhim.danhGia} IMDb - 2D/Digital</p>
                        {/* <p  className="btnDatVe  d-md-inline-flex">ĐẶT VÉ</p> */}
                        <Link
                            className="btnDatVe  d-md-inline-flex"
                            activeClass="active"
                            style={{color:"white"}}
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
                                percent={chiTietPhim.danhGia * 10}
                                format={(percent) => { return percent / 10 }}
                            />
                        </div>
                        <div className="rate_star mt-3">
                            {renderIMDb(chiTietPhim.danhGia)}
                        </div>
                        <p className='nguoiDg'>65 người đánh giá</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
