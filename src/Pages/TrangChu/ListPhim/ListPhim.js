import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardPhimDangChieu from './CardPhimDangChieu';
import CardPhimHotNhat from './CardPhimHotNhat';
import CardPhimSapChieu from './CardPhimSapChieu';
import { callAPI_layDanhSachPhimAction } from '../../../Redux/Actions/QuanLyPhimAction';
import { Fragment } from 'react';
import Slider from 'react-slick';



export default function ListPhim() {
    const dispatch = useDispatch();
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);

    useEffect(() => {
        dispatch(callAPI_layDanhSachPhimAction());
    }, [])


    const renderPhimSapChieu = () => {
        return mangPhim.map((phim, index) => {
            if(index <= 23){
                return <CardPhimSapChieu phim={phim} index={index} />
            }
        })
    }

    const settingsSlickCarousel = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows:2,
        arrows:true
    };
    return (
        <section className=" container sectionListPhim">
            <div>
                <ul className="nav nav-tabs " id="listPhimTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="coming-tab" data-toggle="tab" href="#coming" >Phim sắp chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="came-tab" data-toggle="tab" href="#came" >Phim đang chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="hot-tab" data-toggle="tab" href="#hot" >Phim hot nhất</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane  show active" id="coming" >
                        <Slider className="mt-2" {...settingsSlickCarousel}>
                            {renderPhimSapChieu()}
                        </Slider>
                    </div>
                    <div className="tab-pane " id="came" >
                        <div className="row mt-2">
                            <CardPhimDangChieu />
                        </div>
                    </div>
                    <div className="tab-pane " id="hot" >
                        <div className="row mt-2">
                            <CardPhimHotNhat />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
