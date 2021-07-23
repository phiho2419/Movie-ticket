import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardPhimDangChieu from './CardPhimDangChieu';
import CardPhimSapChieu from './CardPhimSapChieu';
import { callAPI_layDanhSachPhimAction } from '../../../Redux/Actions/QuanLyPhimAction';
import Slider from 'react-slick';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}
export default function ListPhim() {
    const dispatch = useDispatch();
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);

    useEffect(() => {
        dispatch(callAPI_layDanhSachPhimAction());
    }, [dispatch])


    const renderPhimSapChieu = () => {
        return mangPhim.map((phim, index) => {
            if (index <= 15) {
                return <CardPhimSapChieu phim={phim} key={index} />
            }
            else{
                return null
            }
        })
    }
    const renderPhimDangChieu = () => {
        return mangPhim.map((phim, index) => {
            if (index >= 1 && index <= 32) {
                return <CardPhimDangChieu phim={phim} key={index} />
            }
            else{
                return null
            }

        })
    }

    const settingsSlickCarousel = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <section className=" container-lg sectionListPhim">
            <div>
                <ul className="nav nav-tabs " id="listPhimTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="came-tab" data-toggle="tab" href="#came" >Phim đang chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " id="coming-tab" data-toggle="tab" href="#coming" >Phim sắp chiếu</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane  show active" id="came" >
                        <Slider className="mt-2" {...settingsSlickCarousel}>
                            {renderPhimDangChieu()}
                        </Slider>
                    </div>
                    <div className="tab-pane " id="coming" >
                        <Slider className="mt-2" {...settingsSlickCarousel}>
                            {renderPhimSapChieu()}
                        </Slider>
                    </div>
                </div>
            </div>

        </section>
    )
}
