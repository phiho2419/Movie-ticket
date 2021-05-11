import React, { useState } from 'react'
import { Tabs, Progress, Rate } from 'antd';
import ModalVideo from 'react-modal-video'
const { TabPane } = Tabs;
export default function CTPhimInTro() {
    function callback(key) {
        console.log(key);
    }
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="CtPhim__Intro">
            <div className="CtPhim__content row">
                <div className="col-4 d-none d-sm-block CtPhim__img">
                    <img src="http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png" />
                </div>
                <div className="col-8 CtPhim__Text">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane className="tab__left" tab="Thông tin" key="1">
                            <h2>Trạng Tí</h2>
                            <div className="tab__txt">
                                <p>Ngày công chiếu: <span>07/05/2021</span></p>
                                <p>Nội dung: <span>abcxyz</span></p>
                            </div>
                            <div className="tab__button">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="POkFZ_1sbfc" onClose={() => setOpen(false)} />

                                <button onClick={() => setOpen(true)}>TRAILER</button>
                                <button >MUA VÉ</button>
                            </div>

                        </TabPane>
                        <TabPane className="tab__right" tab="Đánh Giá" key="2">
                            <div className="tab__rate">
                                <div class="row">
                                    <div className="col-6">
                                        <h2>Trạng tí</h2>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <Progress type="circle" strokeColor={{ '0%': '#108ee9', '100%': '#87d068', }} percent={95} />
                                        <div className="d-none d-lg-block">


                                            <Rate allowHalf defaultValue={4.5} disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form>
                                <div className="form-group">
                                    <p>Bạn nghĩ gì về phim...</p>
                                    <div className="rate">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                    <textarea className="form-control" />
                                </div >
                                <div className="tab__button">
                                    <button >Đăng</button>

                                </div>
                                <div />

                            </form>

                        </TabPane>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}
