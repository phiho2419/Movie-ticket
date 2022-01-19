import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Modal from 'react-modal';
import rampageBg from '../../../assets/publicImg/wprampage.jpg';
import banTayDietQuy from '../../../assets/publicImg/banTayDietQuy.png';
import godzillaVsKong from '../../../assets/publicImg/godzillaVsKong.jpg';

export default function Carousel() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(0,0,0,0)',
            padding: '40px',
            border: 'unset',
        }
    };
    let buttonCloseStyle = {
        display: 'inline-block',
        color: 'white',
        fontSize: '30px',
        position: 'absolute',
        right: '0px',
        top: '0px',
        outline: 'none',
        background: 'transparent'
    }
    const [modalIsOpenOne, setIsOpenOne] = useState(false);
    function openModalOne() {
        setIsOpenOne(true);
    }
    function closeModalOne() {
        setIsOpenOne(false);
    }
    const [modalIsOpenTwo, setIsOpenTwo] = useState(false);
    function openModalTwo() {
        setIsOpenTwo(true);
    }
    function closeModalTwo() {
        setIsOpenTwo(false);
    }
    const [modalIsOpenThree, setIsOpenThree] = useState(false);
    function openModalThree() {
        setIsOpenThree(true);
    }
    function closeModalThree() {
        setIsOpenThree(false);
    }

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
                        <img className="d-block w-100 carousel_poster" src={godzillaVsKong} alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <Modal
                                isOpen={modalIsOpenOne}
                                style={customStyles}
                                onRequestClose={closeModalOne}
                                ariaHideApp={false}
                            >
                                <div className="modal_video" >
                                    <button style={buttonCloseStyle} onClick={closeModalOne}><i className="fa fa-times"></i></button>
                                    <iframe style={{ width: '100%', height: "90%" }} src="https://www.youtube.com/embed/odM92ap8_c0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Modal>
                            <div className="text-white"onClick={openModalOne} >
                                <div className="carousel-caption ">
                                    <span className="icon_play">
                                        <p className="playBut" style={{ cursor: 'pointer' }}>
                                            <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                <polygon className="triangle" id="XMLID_18_" fill="none" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                                <circle className="circle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                                            </svg>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel_poster " src={rampageBg} alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <Modal
                                isOpen={modalIsOpenTwo}
                                style={customStyles}
                                onRequestClose={closeModalTwo}
                                ariaHideApp={false}
                            >
                                <div className="modal_video" >
                                    <button style={buttonCloseStyle} onClick={closeModalTwo}><i className="fa fa-times"></i></button>
                                    <iframe style={{ width: '100%', height: "90%" }} src="https://www.youtube.com/embed/-43MBOJnVks" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Modal>
                            <div className="text-white  " onClick={openModalTwo}>
                                <div className="carousel-caption ">
                                    <span className="icon_play">
                                        <p style={{ cursor: 'pointer' }} className="playBut">
                                            <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                <polygon className="triangle" id="XMLID_18_" fill="none" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                                <circle className="circle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                                            </svg>
                                        </p>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel_poster " src={banTayDietQuy} alt="First slide" />
                        <div>
                            <div className="carousel__overlay" />
                            <Modal
                                isOpen={modalIsOpenThree}
                                style={customStyles}
                                onRequestClose={closeModalThree}
                                ariaHideApp={false}
                            >
                                <div className="modal_video" >
                                    <button style={buttonCloseStyle} onClick={closeModalThree}><i className="fa fa-times"></i></button>
                                    <iframe style={{ width: '100%', height: "90%" }} src="https://www.youtube.com/embed/8jraVtX821Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Modal>
                            <div className="text-white  " onClick={openModalThree}>
                                <div className="carousel-caption ">
                                    <span className="icon_play">
                                        <p style={{ cursor: 'pointer' }} className="playBut">
                                            <svg version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                <polygon className="triangle" id="XMLID_18_" fill="none" strokeWidth={20} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="73.5,62.5 148.5,105.8 73.5,149.1 " />
                                                <circle className="circle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3" />
                                            </svg>
                                        </p>
                                    </span>

                                </div>
                            </div>
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

