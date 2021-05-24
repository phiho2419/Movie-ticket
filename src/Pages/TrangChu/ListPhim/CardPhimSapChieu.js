import React,{useState} from 'react'
import ModalVideo from 'react-modal-video';

export default function CardPhimSapChieu() {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="card col-3  " >
            <div className="overlay_link">

                <img className="card-img-top card_img_listphim" src="./img/Batman_V_Superman_Dawn_Of_Justice.jpg" alt="Card image cap" />
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jluSu8Rw6YE" onClose={() => setOpen(false)} />
                
                <div className="overlay" onClick={() => setOpen(true)} >
                    <span className="icon_play" ><i className="fa fa-play"></i> </span>
                </div>
            </div>
            <div className="card-body p-3">
                <p className="card_tenphim"> <span className="tag_phim_c18">C18</span> Batman & Superman</p>
                <div className="card_ngaykhoichieu">
                    <span>Ngày khởi chiếu: </span> <span> 12-03-2020</span>
                </div>
                <p className="card_thoiluong">100 phút</p>
            </div>

        </div>
    )
}
