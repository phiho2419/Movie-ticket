import React from 'react'
import Slider from "react-slick";
import Background from '../../../assets/img/ungDung/background.jpg'
import moblie from '../../../assets/img/ungDung/mobile.png'
import slide1 from '../../../assets/img/ungDung/slide1.jpg'
import slide2 from '../../../assets/img/ungDung/slide2.jpg'
import slide3 from '../../../assets/img/ungDung/slide3.jpg'
import slide4 from '../../../assets/img/ungDung/slide4.jpg'
import slide5 from '../../../assets/img/ungDung/slide5.jpg'
import slide6 from '../../../assets/img/ungDung/slide6.jpg'
import slide7 from '../../../assets/img/ungDung/slide7.jpg'
import slide8 from '../../../assets/img/ungDung/slide8.jpg'
import slide9 from '../../../assets/img/ungDung/slide9.jpg'
import slide10 from '../../../assets/img/ungDung/slide10.jpg'
import slide11 from '../../../assets/img/ungDung/slide11.jpg'
import slide12 from '../../../assets/img/ungDung/slide12.jpg'
import slide13 from '../../../assets/img/ungDung/slide13.jpg'
import slide14 from '../../../assets/img/ungDung/slide14.jpg'
import slide15 from '../../../assets/img/ungDung/slide15.jpg'
import slide16 from '../../../assets/img/ungDung/slide16.jpg'



export default function Ungdung() {
    const settings = {
        autoplay: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="ungDung" style={{ backgroundImage: `url(${Background})` }}>
            <div className="ungDung__content container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6 text-center text-lg-left ">
                        <p className="ud__title">
                            Ứng dụng tiện lợi dành cho
                        </p>
                        <p className="ud__title">
                            người yêu điện ảnh
                        </p>
                        <br />
                        <p className="ud__text">
                            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
                        </p>
                        <br />
                        <button className="btnDownload">App miễn phí - Tải về ngay!</button>
                        <p className="sub">
                            TIX có hai phiên bản iOS & Android
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        <img className="ud__img" src={moblie} alt="img"/>
                        <div className="ud__content">
                            <Slider {...settings}>
                                <div>
                                    <img src={slide1} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide2} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide3} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide4} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide5} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide6} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide7} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide8} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide9} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide10} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide11} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide12} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide13} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide14} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide15} className="d-block w-100" alt="..." />
                                </div>
                                <div>
                                    <img src={slide16} className="d-block w-100" alt="..." />
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
