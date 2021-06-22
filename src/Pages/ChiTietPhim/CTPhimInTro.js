import React, { useState } from 'react'
import { Tabs, Progress, Rate } from 'antd';
import ModalVideo from 'react-modal-video';
import moment from 'moment'
import {renderIMDb} from '../../Util/services'

const { TabPane } = Tabs;
export default function CTPhimInTro(props) {

    let { chiTietPhim } = props;
    const [isOpen, setOpen] = useState(false)


    const styleBgImage = {
        backgroundImage: `url(${chiTietPhim.hinhAnh})`,
    }



    return (
        <div className='ctp_intro_wrapper' style={{ position: 'relative' }} >
            {/* <div className="ctp_overlay"></div> */}
            <div className='ctp_intro' style={styleBgImage}><div className="ctp_overlay"></div></div>
            <div className="ctp_container">
                <div className="intro_content row align-items-center">
                    <div className="intro_img col-4">
                        <img src={chiTietPhim.hinhAnh} atl="intro_img" />
                    </div>
                    <div className="intro_infor col-5">
                        <p className="ngayKhoiChieu"> {chiTietPhim.ngayKhoiChieu?.substr(0, 10)}</p>
                        <p className="m-0">
                            <span className="tag_phim_c18 m-0">C16</span>
                            <span className="infor_tenPhim ml-2">{chiTietPhim.tenPhim}</span>
                        </p>
                        <p>105p - {chiTietPhim.danhGia} IMDb - 2D/Digital</p>
                        <p className="btnDatVe">ĐẶT VÉ</p>
                    </div>
                    <div className="intro_rate col-3" >
                        <div className="rate_cirle">
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={chiTietPhim.danhGia*10}
                                format={(percent)=>{return percent/10}}
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
        //     <div className="CtPhim__Intro">
        //         <div className="CtPhim__content row">
        //             <div className="col-4 d-none d-sm-block CtPhim__img">
        //                 <img src={hinhAnh} />
        //             </div>
        //             <div className="col-8 CtPhim__Text">
        //                 <Tabs defaultActiveKey="1">
        //                     <TabPane className="tab__left" tab="Thông tin" key="1">
        //                         <h2>{tenPhim}</h2>
        //                         <div className="tab__txt">
        //                             <p>Ngày công chiếu: <span>{moment(ngayKhoiChieu).add(10, 'days').calendar()}</span></p>
        //                             <p>Nội dung: <span>{moTa}</span></p>
        //                         </div>
        //                         <div className="tab__button">
        //                             <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jluSu8Rw6YE" onClose={() => setOpen(false)} />

        //                             <button onClick={() => setOpen(true)}>TRAILER</button>
        //                             <button >MUA VÉ</button>
        //                         </div>

        //                     </TabPane>
        //                     <TabPane className="tab__right" tab="Đánh Giá" key="2">
        //                         <div className="tab__rate">
        //                             <div class="row">
        //                                 <div className="col-6">
        //                                     <h2>{tenPhim}</h2>
        //                                 </div>
        //                                 <div className="col-12 col-sm-6">
        //                                     <Progress type="circle" strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={danhgias*10} />
        //                                     <div className="d-none d-lg-block">


        //                                         <Rate allowHalf defaultValue={danhgias} disabled />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <form>
        //                             <div className="form-group">
        //                                 <p>Bạn nghĩ gì về phim...</p>
        //                                 <div className="rate">
        //                                     <Rate allowHalf defaultValue={2.5} />
        //                                 </div>
        //                                 <textarea className="form-control" />
        //                             </div >
        //                             <div className="tab__button">
        //                                 <button >Đăng</button>

        //                             </div>
        //                             <div />

        //                         </form>

        //                     </TabPane>

        //                 </Tabs>
        //             </div>
        //         </div>
        //     </div>
        // )
    )
}
