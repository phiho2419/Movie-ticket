import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header'
import ModalVideo from 'react-modal-video';
import SearchForm from '../SearchForm/SearchForm';

export default function Carousel() {
    const [isOpen, setOpen] = useState(false);


    return (
        <div className="carousel_TrangChu" >
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
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="odM92ap8_c0" onClose={() => setOpen(false)} />
                            <a className="text-white" onClick={() => setOpen(true)} >
                                <div className="carousel-caption ">
                                    <span className="icon_play">
                                        <a href="#" className="playBut">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                <polygon className="triangle" id="XMLID_18_" fill="none" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                                <circle className="circle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel_poster " src="./img/wprampage.jpg" alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="coOKvrsmQiI" onClose={() => setOpen(false)} />
                            <a className="text-white  " onClick={() => setOpen(true)}>
                                <div className="carousel-caption ">
                                    <span className="icon_play">
                                        <a href="#" className="playBut">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                <polygon className="triangle" id="XMLID_18_" fill="none" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                                <circle className="circle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                                            </svg>
                                        </a>
                                    </span>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel_poster " src="./img/img1.png" alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="" onClose={() => setOpen(false)} />
                            <a className="text-white  " onClick={() => setOpen(true)}>
                                <div className="carousel-caption ">
                                    <span className="icon_play">
                                        <a href="#" className="playBut">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                <polygon className="triangle" id="XMLID_18_" fill="none" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                                <circle className="circle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                                            </svg>
                                        </a>
                                    </span>

                                </div>
                            </a>
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

            <div className="search_form d-none d-md-block " style={{ background: 'white' }}>
                <SearchForm />
            </div>

        </div>
    )
}

