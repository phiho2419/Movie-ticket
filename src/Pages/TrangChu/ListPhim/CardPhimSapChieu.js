import React, { useState } from 'react'
import { Fragment } from 'react';
import Modal from 'react-modal';


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
            padding:'40px',
            border:'unset',
        }
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="card" >
            <div className="overlay_link">
                <img style={{ objectFit: 'cover' }} className="card-img-top card_img_listphim" src={phim.hinhAnh} alt="Card image cap" />
                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                    onRequestClose={closeModal}
                >
                    <button style={{color:'white',fontSize:'30px',position:'absolute',right:'0px',top:'-5px',outline:'none'}} onClick={closeModal}>X</button>
                    <iframe width="800" height="500" src={phim.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
                <div className="overlay" onClick={openModal} >
                    <span className="icon_play" ><i className="fa fa-play"></i> </span>
                </div>
            </div>
            <div className="card-body p-3">
                <p className="card_tenphim"> <span className="tag_phim_c18">C18</span > {phim.tenPhim} </p>
                <div className="card_ngaykhoichieu">
                    <span>Ngày khởi chiếu: </span> <span> {phim.ngayKhoiChieu.substr(0, 10)}</span>
                </div>
            </div>
        </div>

    )
}
