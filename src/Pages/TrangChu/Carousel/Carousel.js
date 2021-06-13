import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import ModalVideo from 'react-modal-video';
import SearchForm from '../SearchForm/SearchForm';
export default function Carousel() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="carousel_TrangChu">
            {/* <Header /> */}
            <div id="carouselTrangChu" className="carousel slide" data-ride="carousel" data-interval="3000" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselTrangChu" data-slide-to={0} className="active" />
                    <li data-target="#carouselTrangChu" data-slide-to={1} />
                    <li data-target="#carouselTrangChu" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel_poster" src="./img/ps1.jpg" alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jluSu8Rw6YE" onClose={() => setOpen(false)} />
                            <a className="text-white" onClick={() => setOpen(true)} >
                                <div className="carousel-caption d-none d-md-block">
                                    <span className="icon_play"><i className="fa fa-play"></i> </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel_poster " src="./img/ps2.jpg" alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jluSu8Rw6YE" onClose={() => setOpen(false)} />
                            <a className="text-white  " onClick={() => setOpen(true)}>
                                <div className="carousel-caption d-none d-md-block">
                                    <span className="icon_play"><i className="fa fa-play"></i> </span>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel_poster " src="./img/img1.png" alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jluSu8Rw6YE" onClose={() => setOpen(false)} />
                            <a className="text-white  " onClick={() => setOpen(true)}>
                                <div className="carousel-caption d-none d-md-block">
                                    <span className="icon_play"><i className="fa fa-play"></i> </span>

                                </div></a>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselTrangChu" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselTrangChu" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>


            </div>
            <div className="search_form">
                <SearchForm />
            </div>

        </div>
    )
}
