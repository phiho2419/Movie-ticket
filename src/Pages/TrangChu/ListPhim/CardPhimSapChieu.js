import React, { useState } from 'react'
// import { Fragment } from 'react';
import Modal from 'react-modal';
// import buttonCloseStyle from './CardPhimDangChieu'


Modal.defaultStyles.overlay.backgroundColor = 'rgb(0,0,0,0.75)';
Modal.defaultStyles.overlay.zIndex = '100';


export default function CardPhimSapChieu(props) {

    const { phim } = props;
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
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        border: '2px solid white',
        borderRadius: '50%',
        color: 'white',
        fontSize: '30px',
        position: 'absolute',
        right: '0px',
        top: '0px',
        outline: 'none'
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="card" style={{ padding: '10px' }}>
            <div className="overlay_link">
                <img style={{ objectFit: 'cover', width: '100%' }} className="card-img-top card_img_listphim" src={phim.hinhAnh} alt="Card_image_cap" />
                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                >
                    <div className="modal_video" >
                        <button style={buttonCloseStyle} onClick={closeModal}><i className="fa fa-times"></i></button>
                        <iframe style={{ width: '100%', height: "90%" }} src={phim.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Modal>
                <div className="overlay" onClick={openModal} >
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
            <div className="card-body p-3">
                <p className="card_tenphim" style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}> <span className="tag_phim_c18">C18</span > {phim.tenPhim} </p>
                <div className="card_ngaykhoichieu">
                    <span>Ngày khởi chiếu: </span> <span> {phim.ngayKhoiChieu.substr(0, 10)}</span>
                </div>
            </div>
        </div>

    )
}
